package com.labs.scloud.auth.controller;

import com.labs.scloud.auth.model.LoginRequest;
import com.labs.scloud.auth.model.LoginResponse;
import com.labs.scloud.auth.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private AuthService authService;

    @GetMapping("/")
    public String home() {
        return "Welcome to Auth Service!";
    }

    @PostMapping("/auth/token")
    public ResponseEntity<LoginResponse> generateToken(@RequestBody LoginRequest loginRequest ) {
        // Generate JWT token
        return ResponseEntity.ok(authService.generateToken(loginRequest.getUsername(), loginRequest.getPassword()));
    }
}
