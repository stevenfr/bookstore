package com.stv.shop.bookstore.database;

import com.stv.shop.bookstore.model.Book;
import com.stv.shop.bookstore.repository.BookRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import lombok.extern.slf4j.Slf4j;

@Configuration
@Slf4j
public class LoadDatabase {

    @Bean
    public CommandLineRunner initDatabase(BookRepository bookRepository) {
        return args -> {
            bookRepository.save(new Book("The Iliad", "Homer"));
            bookRepository.save(new Book("To Kill a Mockingbird", "Harper Lee"));
            bookRepository.save(new Book("Beloved", "Toni Morrison"));
            bookRepository.save(new Book("Shining", "Stephen King"));
            bookRepository.save(new Book("Don Quixote", "Miguel De Cervantes"));
            bookRepository.save(new Book("Robinson Crusoe", "Daniel Defoe"));
            bookRepository.save(new Book("The Count of Monte Cristo", "Alexandre Dumas"));
            bookRepository.findAll().forEach(book -> {
                log.info("Preloaded " + book);
            });

        };
    }
}