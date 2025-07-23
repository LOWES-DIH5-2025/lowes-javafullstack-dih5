package com.labs.scloud.auth.controller;

import com.labs.scloud.auth.exception.NoUserFoundException;
import com.labs.scloud.auth.model.User;
import com.labs.scloud.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        boolean status = userService.registerUser(user);
        if (!status) {
            return ResponseEntity.badRequest().body("Failed to register user");
        }
        return ResponseEntity.ok("User registered successfully");
    }

    @GetMapping
    public ResponseEntity<Collection<User>> getAllUsers() {
        Collection<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable long id) throws NoUserFoundException {
        User user = userService.getUser(id);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateUser(@PathVariable long id, @RequestBody User userDetails) throws NoUserFoundException {
        boolean status = userService.updateUser(id, userDetails);
        if (!status) {
            return ResponseEntity.badRequest().body("Failed to update user");
        }
        return ResponseEntity.ok("User updated successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable long id) throws NoUserFoundException {
        boolean status = userService.deleteUser(id);
        if (!status) {
            return ResponseEntity.badRequest().body("Failed to delete user");
        }
        return ResponseEntity.ok("User deleted successfully");
    }

    @ExceptionHandler(NoUserFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException(NoUserFoundException e) {
        return ResponseEntity.badRequest().body("User not found. " + e.getMessage());
    }
}
