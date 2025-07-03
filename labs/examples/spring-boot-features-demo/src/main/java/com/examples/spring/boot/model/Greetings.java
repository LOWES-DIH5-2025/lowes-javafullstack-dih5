package com.examples.spring.boot.model;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

//@Component
public class Greetings {
    @Value("Welcome to Spring Boot!!!")
//    @Value("${message}")
    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
