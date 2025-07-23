package com.labs.scloud.auth.service;

import com.labs.scloud.auth.model.LoginResponse;
import com.labs.scloud.auth.security.JwtIssuer;
import com.labs.scloud.auth.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {

    @Autowired
    private JwtIssuer jwtIssuer;
    @Autowired
    private AuthenticationManager authenticationManager;

    public LoginResponse generateToken(String username, String password) {
        var authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password)
        );
        // throws AuthenticationException if authentication fails
        if (authentication.isAuthenticated()) { // log if authentication succeeds
            log.info("User Authentication Success. Username: {}", username);
        }

        SecurityContextHolder.getContext().setAuthentication(authentication);
        var principal = (UserPrincipal) authentication.getPrincipal();

        var roles = principal.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .toList();

        log.info("User Authentication Success. Username: {}, Email: {}, Roles: {}", principal.getUsername(), principal.getEmail(), roles);

        var token = jwtIssuer.issue(JwtIssuer.Request.builder()
                .username(principal.getUsername())
                .email(principal.getEmail())
                .roles(roles)
                .build());

        log.info("Issuing JWT Token {}", token);

        return LoginResponse.builder()
                .token(token)
                .build();
    }
}
