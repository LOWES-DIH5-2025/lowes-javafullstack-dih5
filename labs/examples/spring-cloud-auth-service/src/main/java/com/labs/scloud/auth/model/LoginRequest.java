package com.labs.scloud.auth.model;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@ToString
public class LoginRequest {
    private final String username;
    private final String password;
    private final String role;
}
