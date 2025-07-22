package com.examples.sboot.jwt.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AbstractAuthenticationToken;

@Slf4j
public class UserPrincipalAuthenticationToken extends AbstractAuthenticationToken {
    private final UserPrincipal principal;

    public UserPrincipalAuthenticationToken(UserPrincipal principal) {
        super(principal.getAuthorities());
        log.info("STEP 5: Creating UserPrincipalAuthenticationToken for user: {}", principal.getEmail());
        this.principal = principal;
        setAuthenticated(true);
        log.info("STEP 5a: UserPrincipalAuthenticationToken created and authenticated: {}", principal);
    }

    @Override
    public Object getCredentials() {
        return null;
    }

    @Override
    public UserPrincipal getPrincipal() {
        return principal;
    }
}
