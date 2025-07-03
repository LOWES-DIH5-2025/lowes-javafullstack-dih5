package com.examples.spring.boot.config;

import com.examples.spring.boot.model.Greetings;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GreetingsConfig {

    @Bean
    public Greetings greetings() {
        return new Greetings();
    }
}
