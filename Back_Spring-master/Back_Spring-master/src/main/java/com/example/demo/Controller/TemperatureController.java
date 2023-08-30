package com.example.demo.Controller;

import java.text.DecimalFormat;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.TemperatureModel;
import com.example.demo.Service.TemperatureService;

@RestController
@RequestMapping("/api/temperature")
public class TemperatureController {

    private final TemperatureService temperatureService;

    @Autowired
    public TemperatureController(TemperatureService temperatureService) {
        this.temperatureService = temperatureService;
    }
    
    @GetMapping("/findAll")
    public List<TemperatureModel> getFirstTemperatureData() {
        return temperatureService.getAllTemperData();
    }
    
    @GetMapping("/fishery")
    public List<String> getFisheryNameData() {
        return temperatureService.getAllFisheryName();
    }
    
    @GetMapping("/fishery/data")
    public List<TemperatureModel> getFisheryData(@RequestParam("fishery") String fishery) {
        return temperatureService.getFisheryData(fishery);
    }
    
    @GetMapping("/search")
    public List<TemperatureModel> searchTemperatures(
            @RequestParam(name = "fishery", required = false) String fishery,
            @RequestParam(name = "year", required = false) Integer year,
            @RequestParam(name = "month", required = false) Integer month,
            @RequestParam(name = "day", required = false) Integer day,
            @RequestParam(name = "longitude", required = false) String longitude,
            @RequestParam(name = "latitude", required = false) String latitude) {
        
        List<TemperatureModel> temperatureModels = temperatureService.searchTemperatures(fishery, year, month, day, longitude, latitude);

        // 변환된 값으로 데이터 출력
        for (TemperatureModel model : temperatureModels) {
            String convertedLatitude = String.valueOf(parseCoordinate(model.getLatitude()));
            String convertedLongitude = String.valueOf(parseCoordinate(model.getLongitude()));
            
            model.setLatitude(convertedLatitude);
            model.setLongitude(convertedLongitude);
        }

        return temperatureModels;
    }

	 public double parseCoordinate(String coordinate) {
        String[] parts = coordinate.split("[°´˝]");
        double degrees = Double.parseDouble(parts[0]);
        double minutes = Double.parseDouble(parts[1]);
        double seconds = Double.parseDouble(parts[2]);

        double decimalDegrees = degrees + (minutes / 60.0) + (seconds / 3600.0);

        // 소수점 아래 4번째 자리까지만 표시
        DecimalFormat df = new DecimalFormat("#.####");
        return Double.parseDouble(df.format(decimalDegrees));
    }
	 
	 @GetMapping("/depth")
	    public List<Integer> getAllDepths() {
	        return temperatureService.getAllDepths();
	    }
	 
	 @GetMapping("/doint")
     public List<Double> getAllDoint() {
         return temperatureService.getAllDoint();
     }
}
