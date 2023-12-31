package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.MongoDBTestService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping(path = "/mongo")
public class MongoDBTestController {

    @Autowired
    MongoDBTestService mongoDBTestService;

    @GetMapping(value = "/find")
    public String findUserData(@RequestParam String name) {
        return mongoDBTestService.selectUser(name);
    }

    @GetMapping(value = "/save")
    public String saveUserData(@RequestParam String name, @RequestParam int age) {
        log.info("[Controller][Recv] name : {}, age : {}", name, age);
        mongoDBTestService.saveUser(name, age);
        
        return mongoDBTestService.selectUser(name);
    }
}