package com.examples.sboot.graphql.controller;

import com.examples.sboot.graphql.model.Book;
import com.examples.sboot.graphql.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class BookController {

    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @QueryMapping
    public List<Book> getBooks() {
        return bookService.getAllBooks();
    }

    @QueryMapping
    public Book getBook(@Argument String title) {
        return bookService.getBookByTitle(title);
    }

    @MutationMapping
    public Book addBook(@Argument String title, @Argument String author) {
        return bookService.saveBook(new Book(title, author));
    }

    @MutationMapping
    public Book updateBook(@Argument int id, @Argument String title, @Argument String author) {
        return bookService.updateBook(id, title, author);
    }

    @MutationMapping
    public void deleteBook(@Argument int id) {
        bookService.deleteBook(id);
    }

}
