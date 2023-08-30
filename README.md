
# 데이터 분석 및 예측

## 주제

** 최근 5년간 빈산소수괴로 인한 물고기 폐사를 피하기 위한 분석 및 예측

### API

| API 종류 | HTTP Method |        기능        |       url      |                                          설명                                          |
|:--------:|:--------:|:------------------:|:-------------------:|:--------------------------------------------------------------------------------------:|
| User API |   GET   |  어장명 조회  |        /fishery       | DB에 저장된 데이터들 중 어장명만 조회 |
|          |  GET  |    어장명을 통한 데이터 조회   |      /fishery/data     | 선택한 어장명을 통해 해당 어장명의 데이터를 조회                           |
|          |  GET  |      검색     |     /search    | 날짜를 통한 검색으로 해당 날짜에 맞는 어장명, 경도, 위도 등 데이터를 조회       |
|          |   GET   |   용존산소량   | /doint | /search API를 통한 검색에 용존산소량(DO)를 조회                |
|          |   GET    |      회원 정보     |        /user        | 유저 정보를 반환                                                                       |
|  Kakao API |      | 카카오 MAP |    dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY      | 발급받은 카카오 API를 이용해 view에 map을 표시한 뒤 API를 통한 위치 표시
|   |  GET   | 카카오 검색 |     https://dapi.kakao.com/v2/search/web     | REST API 키를 통해 '빈산소'라는 키워드를 설정해 관련 검색어만 조회 및 사이트 방문

## Project Stack

* React.js
* Spring boot
* MongoDB
* Python
* Tableau
   
