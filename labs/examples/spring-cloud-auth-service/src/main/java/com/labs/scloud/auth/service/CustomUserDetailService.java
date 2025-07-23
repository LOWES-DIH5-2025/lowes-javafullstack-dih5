package com.labs.scloud.auth.service;

import com.labs.scloud.auth.exception.NoUserFoundException;
import com.labs.scloud.auth.model.User;
import com.labs.scloud.auth.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
//@Component
//@RequiredArgsConstructor
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = null;
        try {
            user = userService.findByUsername(username);
        } catch (NoUserFoundException e) {
            log.error("User {} not found. {}", username, e.getMessage(), e);
            throw new UsernameNotFoundException(e.getMessage());
        }

        return UserPrincipal.builder()
                .username(user.getUsername())
                .email(user.getEmail())
                .password(user.getPassword())
                .authorities(List.of(new SimpleGrantedAuthority(user.getRole())))
                .build();
    }
}
