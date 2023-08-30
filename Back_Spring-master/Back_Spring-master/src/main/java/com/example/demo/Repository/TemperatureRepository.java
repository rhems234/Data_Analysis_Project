package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.TemperatureModel;

@Repository
public interface TemperatureRepository extends MongoRepository<TemperatureModel, String>{
    TemperatureModel findBylongitude(String longitude);
    TemperatureModel findBylatitude(String latitude);
    TemperatureModel findByfishery(String fishery);
    TemperatureModel findByyear(int year);
    TemperatureModel findBymonth(int month);
    TemperatureModel findByday(int day);
    List<TemperatureModel> findByTime(String time);
    TemperatureModel findBydepth(int depth);
    TemperatureModel findBydate(String date);
    TemperatureModel findByvalue(double value);
    TemperatureModel findByDvalue(double Dvalue);
    TemperatureModel findBydoint(double doint);
}
