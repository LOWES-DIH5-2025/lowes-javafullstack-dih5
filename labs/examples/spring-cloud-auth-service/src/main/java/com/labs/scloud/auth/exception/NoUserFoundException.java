package com.labs.scloud.auth.exception;

public class NoUserFoundException extends Exception {

    public NoUserFoundException() {}

    public NoUserFoundException(String message) {
        super(message);
    }

    public NoUserFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
