package com.examples.sboot.graphql.repo;

import com.examples.sboot.graphql.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Integer> {
    List<Book> findAll();
    Book findByTitle(String title);
}
