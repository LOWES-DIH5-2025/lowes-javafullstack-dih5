package com.examples.sboot.jwt.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Optional;

@Component
@RequiredArgsConstructor
@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtDecoder jwtDecoder;
    private final JwtToPrincipalConverter jwtToPrincipalConverter;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        log.info("STEP 1: Processing JWT Authentication Filter for request: {}", request.getRequestURI());
        extractTokenFromRequest(request)
                .map(jwtDecoder::decode)
                .map(jwtToPrincipalConverter::convert)
                .map(UserPrincipalAuthenticationToken::new)
                .ifPresent(authentication -> {
                    log.info("STEP 6: Setting the UserPrincipalAuthenticationToken into SecurityContext, {}", authentication);
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                });
        log.info("STEP 7: Continuing with the filter chain for request: {}", request.getRequestURI());
        filterChain.doFilter(request, response); // Very important not to forget this
    }

    private Optional<String> extractTokenFromRequest(HttpServletRequest request) {
        var token = request.getHeader("Authorization");
        if (StringUtils.hasText(token) && token.startsWith("Bearer ")) {
            // log extracted token for debugging purposes
            log.info("STEP 2: JWT Token extracted from request header: {}", token);
            return Optional.of(token.substring(7));
        }
        log.info("STEP 2: No JWT Token found in request headers");
        return Optional.empty();
    }
}
