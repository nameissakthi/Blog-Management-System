package com.sakthivel.blogbackend.controller;

import com.sakthivel.blogbackend.model.Post;
import com.sakthivel.blogbackend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController {

    PostService postService;

    public PostController() {}

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/posts")
    public List<Post> getPosts() {
        return postService.getPosts();
    }

    @GetMapping("/posts/{id}")
    public Post getPostById( @PathVariable Integer id) {
        return postService.getPostById(id);
    }

    @PostMapping()
    public Post createPost(@RequestBody Post post) {
        return postService.createPost();
    }
}
