package com.examples.sboot.jwt.security;

import com.auth0.jwt.interfaces.DecodedJWT;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Slf4j
public class JwtToPrincipalConverter {
    public UserPrincipal convert(DecodedJWT jwt) {
        log.info("STEP 4: Converting JWT to UserPrincipal: {}", jwt.getToken());
        var authorityList = getClaimOrEmptyList(jwt, "au").stream()
                .map(SimpleGrantedAuthority::new)
                .toList();

        UserPrincipal principal = UserPrincipal.builder()
                .userId( Long.parseLong(jwt.getSubject()) )
                .email( jwt.getClaim("e").asString() )
                .authorities( authorityList )
                .build();
        log.info("STEP 4a: UserPrincipal created: {}", principal);
        return principal;
    }

    private List<String> getClaimOrEmptyList(DecodedJWT jwt, String claim) {
        if (jwt.getClaim(claim).isNull()) return List.of();
        return jwt.getClaim(claim).asList(String.class);
    }
}
