package com.stv.shop.bookstore.misc;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import com.stv.shop.bookstore.controller.BookController;
import com.stv.shop.bookstore.model.Book;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

@Component
public class BookResourceAssembler implements RepresentationModelAssembler<Book, EntityModel<Book>> {

	@Override
	public EntityModel<Book> toModel(final Book book) {
		return new EntityModel<>(book, linkTo(methodOn(BookController.class).getBookById(book.getId())).withSelfRel(),
				linkTo(methodOn(BookController.class).getAllBooks()).withRel("books"));
	}
}
