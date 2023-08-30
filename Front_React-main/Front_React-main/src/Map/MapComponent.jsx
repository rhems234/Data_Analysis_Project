import React, { useState, useEffect } from "react";
import { Map, MapMarker, MapInfoWindow } from "react-kakao-maps-sdk";

function MapComponent({
  latitude,
  longitude,
  searchedMarkerPosition,
  selectedResult,
  onResultSelect,
}) {
  const [map, setMap] = useState(null);
  const [infoWindowPosition, setInfoWindowPosition] = useState(null);
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);

  useEffect(() => {
    if (selectedResult) {
      const index = latitude.indexOf(selectedResult.latitude);
      if (index !== -1) {
        const position = {
          lat: selectedResult.latitude,
          lng: selectedResult.longitude,
        };
        setInfoWindowPosition(position);
        setSelectedMarkerIndex(index);

        if (map) {
          const kakaoLatLng = new window.kakao.maps.LatLng(
            selectedResult.latitude,
            selectedResult.longitude
          );
          map.panTo(kakaoLatLng);
          map.setLevel(12); // 설정할 확대 레벨 값
        }
      }
    }
  }, [selectedResult, latitude, longitude, map]);

  useEffect(() => {
    if (searchedMarkerPosition && map) {
      const kakaoLatLng = new window.kakao.maps.LatLng(
        searchedMarkerPosition.lat,
        searchedMarkerPosition.lng
      );
      map.panTo(kakaoLatLng);
      map.setLevel(13);
      setInfoWindowPosition(searchedMarkerPosition);
      setSelectedMarkerIndex(null); // Reset selected marker index
    }
  }, [searchedMarkerPosition, map]);

  const handleMapMarkerClick = () => {
    if (infoWindowPosition && map) {
      const kakaoLatLng = new window.kakao.maps.LatLng(
        infoWindowPosition.lat,
        infoWindowPosition.lng
      );
      map.panTo(kakaoLatLng);
      map.setLevel(17); // 선택한 마커의 위치로 지도 확대
    }
  };

  const mapMarkers = selectedResult ? (
    <MapMarker
      position={{
        lat: selectedResult.latitude,
        lng: selectedResult.longitude,
      }}
      onClick={handleMapMarkerClick}
    ></MapMarker>
  ) : null;

  return (
    <div style={{ display: "flex" }}>
      <Map
        center={{ lat: 37.9078, lng: 133.7669 }}
        style={{ width: "50%", height: "550px", flex: 1 }}
        level={16}
        onLoad={(map) => setMap(map)}
      >
        {mapMarkers}
        {infoWindowPosition && selectedMarkerIndex !== null && (
          <MapInfoWindow position={infoWindowPosition} removable={true}>
            <div style={{ padding: "5px" }}>
              경도: {longitude[selectedMarkerIndex].toFixed(4)} <br />
              위도: {latitude[selectedMarkerIndex].toFixed(4)}{" "}
            </div>
          </MapInfoWindow>
        )}
        <div style={{ flex: 1, height: "550px" }}>
          <iframe
            src="https://public.tableau.com/views/_16923391787230/5?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true"
            width={500}
            height={400}
            title="빈산소 통계"
            frameborder="1"
          ></iframe>
        </div>
      </Map>
    </div>
  );
}

export default MapComponent;
