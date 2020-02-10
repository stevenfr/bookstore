package com.stv.shop.bookstore.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Book {

    public @Id @GeneratedValue Long id;
    public String title;
    public String author;

    public Book() {
    }

    public Book(String title, String author) {
        super();
        this.title = title;
        this.author = author;
    }

}