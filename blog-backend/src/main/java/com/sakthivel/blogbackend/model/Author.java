package com.sakthivel.blogbackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Setter @Getter
@NoArgsConstructor @AllArgsConstructor @RequiredArgsConstructor
@Entity
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    @NonNull
    private String username;
    @NonNull
    private String password;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "posts")
    private List<Post> posts;
}
