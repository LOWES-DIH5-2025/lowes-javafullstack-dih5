package com.examples.sboot.swagger;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/greetings")
@Tag(name = "Greetings Controller", description = "Demo API for Swagger Integration")
public class GreetingsController {

    @Operation(summary = "Get Greeting Message", description = "Returns a greeting message")
    @GetMapping
    public String getGreeting() {
        return "Hello, Welcome to Spring Boot with Swagger!";
    }

    @Operation(summary = "Get Personalized Greeting", description = "Returns a personalized greeting")
    @GetMapping("/{name}")
    public String getPersonalizedGreeting(@PathVariable String name) {
        return "Hello, " + name + "! Welcome to Swagger API.";
    }

    @Operation(summary = "Get Personalized Greeting", description = "Returns a personalized greeting")
    @PostMapping
    public String postPersonalizedGreeting(@RequestBody String name) {
        return "Hello, " + name + "! Welcome to Swagger API.";
    }
}
