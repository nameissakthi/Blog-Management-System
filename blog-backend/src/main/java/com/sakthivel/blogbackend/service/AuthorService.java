package com.sakthivel.blogbackend.service;

import com.sakthivel.blogbackend.model.Author;
import com.sakthivel.blogbackend.model.Post;
import com.sakthivel.blogbackend.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthorService {

    private final AuthorRepository authorRepository;

    public AuthorService(@Autowired AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    public ResponseEntity<List<Author>> getAll() {
        return new ResponseEntity<>(authorRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Author> get(int id) {
        if(!authorRepository.existsById(id))
            return new ResponseEntity<>(new Author(), HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(authorRepository.findById(id).orElse(null), HttpStatus.OK);
    }

    public ResponseEntity<String> add(Author author) {
        if(authorRepository.existsAuthorByUsername(author.getUsername()))
            return new ResponseEntity<>("Author Already Exists", HttpStatus.NOT_FOUND);
        authorRepository.save(author);
        return new ResponseEntity<>("Author Added Successfully", HttpStatus.OK);
    }

    public ResponseEntity<String> update(Author author) {
        if(!authorRepository.existsById(author.getId()))
            return new ResponseEntity<>("Author Details Not Found", HttpStatus.NOT_FOUND);
        authorRepository.save(author);
        return new ResponseEntity<>("Author Details Updated", HttpStatus.OK);
    }

    public ResponseEntity<String> delete(int id) {
        if(!authorRepository.existsById(id))
            return new ResponseEntity<>("Author Details Not Found", HttpStatus.NOT_FOUND);
        authorRepository.deleteById(id);
        return new ResponseEntity<>("Author Deleted Successfully", HttpStatus.OK);
    }

    public ResponseEntity<List<Post>> getAuthorPosts(String username) {
        if(!authorRepository.existsAuthorByUsername(username))
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(authorRepository.getPostsByAuthorUsername(username), HttpStatus.OK);
    }

    public ResponseEntity<Author> getAuthorByAuth(Author authorDetails) {
        if(!authorRepository.existsAuthorByUsername(authorDetails.getUsername()))
            return new ResponseEntity<>(new Author(), HttpStatus.NOT_FOUND);

        Author author = authorRepository.findAuthorByUsername(authorDetails.getUsername());
        if(!author.getPassword().equals(authorDetails.getPassword()))
            return new ResponseEntity<>(new Author(), HttpStatus.UNAUTHORIZED);

        return new ResponseEntity<>(author, HttpStatus.OK);
    }
}