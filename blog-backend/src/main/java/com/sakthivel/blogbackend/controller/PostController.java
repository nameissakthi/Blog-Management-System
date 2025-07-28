package com.sakthivel.blogbackend.controller;

import com.sakthivel.blogbackend.model.Post;
import com.sakthivel.blogbackend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    PostService postService;

    public PostController() {}

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Post>> getPosts() {
        return postService.getPosts();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Integer id) {
        return postService.getPostById(id);
    }

    @PostMapping("/add")
    public ResponseEntity<String> createPost(@RequestBody Post post) {
        return postService.createPost(post);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePostById(@PathVariable int id) {
        return postService.deletePostById(id);
    }
}
