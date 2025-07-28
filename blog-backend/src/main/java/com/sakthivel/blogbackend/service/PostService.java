package com.sakthivel.blogbackend.service;

import com.sakthivel.blogbackend.model.Post;
import com.sakthivel.blogbackend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    public ResponseEntity<List<Post>> getPosts() {
        try{
            return new ResponseEntity<>(postRepository.findAll(), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(List.of(new Post()), HttpStatus.CONFLICT);
        }
    }

    public ResponseEntity<Post> getPostById(Integer id) {
        try{
            return new ResponseEntity<>(postRepository.findById(id).orElse(new Post()), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(new Post(), HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<String> deletePostById(int id) {
        try{
            postRepository.deleteById(id);
            return new ResponseEntity<>("Post Deleted Successfully", HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>("Post Deletion Unsuccessful", HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<String> createPost(Post post) {
        try{
            postRepository.save(post);
            return new ResponseEntity<>("Post Created Successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Post Creation Unsuccessful", HttpStatus.NOT_MODIFIED);
        }
    }
}
