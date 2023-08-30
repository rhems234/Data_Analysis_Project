package com.example.demo.Service;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.Model.TemperatureModel;
import com.example.demo.Repository.TemperatureRepository;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class TemperatureService {

    private final TemperatureRepository temperatureRepository;

    @Autowired
    public TemperatureService(TemperatureRepository temperatureRepository) {
        this.temperatureRepository = temperatureRepository;
    }
    
    public List<TemperatureModel> getAllTemperData() {
        return temperatureRepository.findAll();
    }
    
    public List<String> getAllFisheryName() {
        List<TemperatureModel> temperatureModels = temperatureRepository.findAll();
        Set<String> uniqueFisheryNames = new HashSet<>(); // 중복 제거를 위한 Set

        // 중복되지 않는 어장명만 Set에 추가
        for (TemperatureModel model : temperatureModels) {
            uniqueFisheryNames.add(model.getFishery());
        }

        // Set을 다시 리스트로 변환하여 반환
        return new ArrayList<>(uniqueFisheryNames);
    }

    
    public List<Double> getAllTemperlongitude() {
        List<TemperatureModel> temperatureModels = temperatureRepository.findAll();
        return temperatureModels.stream()
            .map(temperatureModel -> parseCoordinate(temperatureModel.getLongitude()))
            .collect(Collectors.toList());
    }

    public List<Double> getAllTemperLatitude() {
        List<TemperatureModel> temperatureModels = temperatureRepository.findAll();
        return temperatureModels.stream()
            .map(temperatureModel -> parseCoordinate(temperatureModel.getLatitude()))
            .collect(Collectors.toList());
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
    
    public List<TemperatureModel> searchTemperatures(String fishery, Integer year, Integer month, Integer day, String longitude, String latitude) {
        List<TemperatureModel> temperatureModels = temperatureRepository.findAll();

        if (fishery != null) {
            temperatureModels = filterByFishery(temperatureModels, fishery);
        }

        if (year != null) {
            temperatureModels = filterByYear(temperatureModels, year);
        }

        if (month != null) {
            temperatureModels = filterByMonth(temperatureModels, month);
        }

        if (day != null) {
            temperatureModels = filterByDay(temperatureModels, day);
        }

        if (longitude != null) {
            temperatureModels = filterByLongitude(temperatureModels, longitude);
        }

        if (latitude != null) {
            temperatureModels = filterByLatitude(temperatureModels, latitude);
        }

        return temperatureModels;
    }

		private List<TemperatureModel> filterByFishery(List<TemperatureModel> models, String fishery) {
		    return models.stream()
		            .filter(temperatureModel -> temperatureModel.getFishery().equalsIgnoreCase(fishery))
		            .collect(Collectors.toList());
		}
		
		private List<TemperatureModel> filterByYear(List<TemperatureModel> models, Integer year) {
		    return models.stream()
		            .filter(temperatureModel -> temperatureModel.getYear() == year)
		            .collect(Collectors.toList());
		}
		
		private List<TemperatureModel> filterByMonth(List<TemperatureModel> models, Integer month) {
		    return models.stream()
		            .filter(temperatureModel -> temperatureModel.getMonth() == month)
		            .collect(Collectors.toList());
		}
		
		private List<TemperatureModel> filterByDay(List<TemperatureModel> models, Integer day) {
		    return models.stream()
		            .filter(temperatureModel -> temperatureModel.getDay() == day)
		            .collect(Collectors.toList());
		}
		
		private List<TemperatureModel> filterByLongitude(List<TemperatureModel> models, String longitude) {
		    double convertedLongitude = parseCoordinate(longitude);
		    List<Double> allLongitudes = getAllTemperlongitude();

		    return models.stream()
		            .filter(temperatureModel -> allLongitudes.contains(temperatureModel.getLongitude()))
		            .collect(Collectors.toList());
		}

		private List<TemperatureModel> filterByLatitude(List<TemperatureModel> models, String latitude) {
		    double convertedLatitude = parseCoordinate(latitude);
		    List<Double> allLatitudes = getAllTemperLatitude();

		    return models.stream()
		            .filter(temperatureModel -> allLatitudes.contains(temperatureModel.getLatitude()))
		            .collect(Collectors.toList());
		}

		public List<TemperatureModel> getFisheryData(String fishery) {
		    List<TemperatureModel> temperatureModels = temperatureRepository.findAll();

		    // 어장명을 기준으로 데이터 필터링
		    temperatureModels = filterByFishery(temperatureModels, fishery);

		    return temperatureModels;
		}
		
		public List<Integer> getAllDepths() {
	        List<TemperatureModel> temperatureModels = temperatureRepository.findAll();
	        return temperatureModels.stream()
	            .map(TemperatureModel::getDepth)
	            .collect(Collectors.toList());
	    }

		public List<Double> getAllDValue() {
		    List<TemperatureModel> temperatureModels = temperatureRepository.findAll();
		    return temperatureModels.stream()
		            .map(TemperatureModel::getDvalue)
		            .filter(Dvalue -> Dvalue != null)
		            .collect(Collectors.toList());
		}
		
		public List<Double> getAllDoint() {
	           List<TemperatureModel> temperatureModels = temperatureRepository.findAll();
	           return temperatureModels.stream()
	               .map(TemperatureModel::getDoint)
	               .collect(Collectors.toList());
	       }
    
}
