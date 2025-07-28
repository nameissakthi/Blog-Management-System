package com.sakthivel.blogbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Greet {

    @GetMapping
    public String greet() {
        return "API Working";
    }
}
