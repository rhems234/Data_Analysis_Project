package com.example.demo.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document(collection = "fishery")
public class TemperatureModel {
    
    @Id
    private String _id;
    private int number;
    private String fishery;
    private int apex;
    private String latitude; // 위도
    private String longitude; // 경도
    private int year;
    private int month;
    private int day;
    private String time;
    private String weather;
    private int depth;
	private String date;
	private Double value;
	private Double Dvalue;
	
	@Field("DO") // 데이터베이스의 'DO' 필드와 매핑
    private double doint;
}
