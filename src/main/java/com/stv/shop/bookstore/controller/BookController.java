package com.stv.shop.bookstore.controller;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;

import com.stv.shop.bookstore.misc.BookNotFoundException;
import com.stv.shop.bookstore.misc.BookResourceAssembler;
import com.stv.shop.bookstore.model.Book;
import com.stv.shop.bookstore.repository.BookRepository;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {

    private final BookRepository bookRepository;
    private final BookResourceAssembler assembler;

    public BookController(BookRepository br, BookResourceAssembler bra) {
        this.bookRepository = br;
        this.assembler = bra;
    }

    @GetMapping("/book/{id}")
    public EntityModel<Book> getBookById(@PathVariable Long id) {
        Book book = bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
        return assembler.toModel(book);
    }

    @GetMapping("/book")
    public CollectionModel<EntityModel<Book>> getAllBooks() {
        List<EntityModel<Book>> books = bookRepository.findAll().stream().map(assembler::toModel)
                .collect(Collectors.toList());
        return new CollectionModel<>(books, linkTo(methodOn(BookController.class).getAllBooks()).withSelfRel());
    }

    @PostMapping("/book")
    public ResponseEntity<?> newBook(@RequestBody Book newBook) throws URISyntaxException {
        EntityModel<Book> resource = assembler.toModel(bookRepository.save(newBook));
        return ResponseEntity.created(URI.create("/book/" + newBook.getId())).body(resource);
    }

    @DeleteMapping("/book/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Long id) {
        bookRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/book/{id}")
    public ResponseEntity<?> replaceBook(@RequestBody Book newBook, @PathVariable Long id) {

        Book updateBook = bookRepository.findById(id).map(book -> {
            book.setTitle(newBook.getTitle());
            book.setAuthor(newBook.getAuthor());
            return bookRepository.save(book);
        }).orElseGet(() -> {
            newBook.setId(id);
            return bookRepository.save(newBook);
        });

        EntityModel<Book> resource = assembler.toModel(updateBook);

        return ResponseEntity.created(URI.create("/book/" + newBook.getId())).body(resource);
    }

}