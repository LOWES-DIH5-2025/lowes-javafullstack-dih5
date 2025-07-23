package com.labs.scloud.auth.service;

import com.labs.scloud.auth.exception.NoUserFoundException;
import com.labs.scloud.auth.model.User;
import com.labs.scloud.auth.repo.UserRepository;
import jakarta.ws.rs.NotFoundException;
import org.hibernate.annotations.SecondaryRow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public boolean registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user) != null;
    }

    @Override
    public User getUser(long id) throws NoUserFoundException {
        return userRepo.findById(id).orElseThrow(NoUserFoundException::new);
    }

    @Override
    public Collection<User> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public boolean updateUser(long id, User user) throws NoUserFoundException {
        userRepo.findById(id).orElseThrow(NoUserFoundException::new);
        user.setId(id);
        return userRepo.save(user) != null;
    }

    @Override
    public boolean deleteUser(long id) throws NoUserFoundException {
        userRepo.findById(id).orElseThrow(NoUserFoundException::new);
        userRepo.deleteById(id);
        return true;
    }

    @Override
    public User findByUsername(String username) throws NoUserFoundException {
        return userRepo.findByUsername(username).orElseThrow(NoUserFoundException::new);
    }
}
