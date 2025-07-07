package com.examples.sboot.graphql.service;

import com.examples.sboot.graphql.model.Book;
import com.examples.sboot.graphql.repo.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // Save a book
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    // Get all books
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    // Get a book by title
    public Book getBookByTitle(String title) {
        return bookRepository.findByTitle(title);
    }

    // Update the title and author of a book
    public Book updateBook(int id, String title, String author) {
        Book bookForUpdate = bookRepository.findById(id).orElseThrow(() -> new RuntimeException("Book not found for given id - " + id));
        bookForUpdate.setTitle(title);
        bookForUpdate.setAuthor(author);
        return bookRepository.save(bookForUpdate);
    }

    // Delete a book by id
    public void deleteBook(int id) {
        Book book = bookRepository.findById(id).orElseThrow(() -> new RuntimeException("Book not found for given id - " + id));
        bookRepository.delete(book);
    }
}
