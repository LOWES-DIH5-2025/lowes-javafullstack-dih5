package com.examples.sboot.graphql;

import com.examples.sboot.graphql.model.Book;
import com.examples.sboot.graphql.service.BookService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootGraphqlDemoApplication {

	@Autowired
	private BookService bookService;

	@PostConstruct
	public void loadBooks() {
		bookService.saveBook(new Book("Harry Potter and the Chamber of Secrets","J.K. Rowling"));
		bookService.saveBook(new Book("The Lord of the Rings", "J.R.R. Tolkien"));
		bookService.saveBook(new Book("Not a Penny More, Not a Penny Less", "Jeffrey Archer"));
	}

	public static void main(String[] args) {
		SpringApplication.run(SpringBootGraphqlDemoApplication.class, args);
	}

}