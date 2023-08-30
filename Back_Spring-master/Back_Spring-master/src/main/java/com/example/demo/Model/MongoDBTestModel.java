package com.example.demo.Model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document(collection = "data")
public class MongoDBTestModel {
	
    private String id;
    private String name;
    private int age;
}