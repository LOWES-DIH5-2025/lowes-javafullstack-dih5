package com.examples.sboot.jwt.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class JwtDecoder {
    private final JwtProperties properties;

    public DecodedJWT decode(String token) {
        log.info("STEP 3: Decoding JWT Token: {}", token);
        DecodedJWT decodedJWT =  JWT.require(Algorithm.HMAC256(properties.getSecretKey()))
                .build()
                .verify(token);
        log.info("STEP 3a: JWT Token decoded successfully: {}", decodedJWT.getToken());
        return decodedJWT;
    }
}
