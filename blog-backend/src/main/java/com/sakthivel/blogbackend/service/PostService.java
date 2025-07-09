package com.sakthivel.blogbackend.service;

import com.sakthivel.blogbackend.model.Post;
import com.sakthivel.blogbackend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    PostRepository postRepository;

    public PostService() {}

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getPosts() {
        try{
            return postRepository.findAll();
        }catch (Exception e){
            System.out.println(e.getMessage());
            return List.of(new Post());
        }
    }

    public Post getPostById(Integer id) {
        try{
            return postRepository.findById(id).orElse(null);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }
}
