package com.stv.shop.bookstore.misc;

public class BookNotFoundException extends RuntimeException {

	/**
	* 
	*/
	private static final long serialVersionUID = 2183021737157992872L;

	public BookNotFoundException(Long id) {
		super("Could not find book " + id);
	}
}
