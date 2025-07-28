package com.sakthivel.blogbackend.controller;

import com.sakthivel.blogbackend.model.Author;
import com.sakthivel.blogbackend.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/author")
public class AuthorController {

    private final AuthorService authorService;

    public AuthorController(@Autowired AuthorService authorService) {
        this.authorService = authorService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Author>> getAuthors() {
        return authorService.getAll();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Author> getAuthor(@PathVariable int id) {
        return authorService.get(id);
    }

    @GetMapping("/get")
    public ResponseEntity<Author> getAuthorByAuth(@RequestBody Author authorDetails) {
        return authorService.getAuthorByAuth(authorDetails);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addAuthor(@RequestBody Author author) {
        return authorService.add(author);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateAuthor(@RequestBody Author author) {
        return authorService.update(author);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteAuthor(@PathVariable int id) {
        return authorService.delete(id);
    }
}
