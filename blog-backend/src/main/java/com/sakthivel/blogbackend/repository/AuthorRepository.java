package com.sakthivel.blogbackend.repository;

import com.sakthivel.blogbackend.model.Author;
import com.sakthivel.blogbackend.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Integer> {

    boolean existsAuthorByUsername(String username);

    Author findAuthorByUsername(String username);

    @Query("SELECT a.posts FROM Author a WHERE a.username = :username")
    List<Post> getPostsByAuthorUsername(@Param("username") String username);
}