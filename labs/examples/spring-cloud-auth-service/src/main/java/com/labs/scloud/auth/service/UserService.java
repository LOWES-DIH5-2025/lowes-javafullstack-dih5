package com.labs.scloud.auth.service;

import com.labs.scloud.auth.exception.NoUserFoundException;
import com.labs.scloud.auth.model.User;

import java.util.Collection;
import java.util.Optional;

public interface UserService {
    public boolean registerUser(User user);
    public User getUser(long id) throws NoUserFoundException;
    public Collection<User> getAllUsers();
    public boolean updateUser(long id, User user) throws NoUserFoundException;
    public boolean deleteUser(long id) throws NoUserFoundException;
    public User findByUsername(String username) throws NoUserFoundException;
}
