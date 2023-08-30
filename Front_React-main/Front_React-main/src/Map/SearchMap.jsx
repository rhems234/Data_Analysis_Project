import React, { useState } from "react";
import ApiSearch from "./ApiSearch";
import MapComponent from "./MapComponent";

function SearchBoard({ onLocationChange }) {
  const [selectedResult, setSelectedResult] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // 선택한 결과와 위치 정보 업데이트
  const handleResultSelect = (result, location) => {
    setSelectedResult(result);
    setSelectedLocation(location);
  };

  return (
    <div>
      <ApiSearch
        onLocationChange={onLocationChange} // onLocationChange 함수 전달
        onResultSelect={(result, location) => {
          setSelectedResult(result);
          setSelectedLocation(location);
        }}
      />

      {/* MapComponent에 선택된 결과와 위치 정보 전달 */}
      <MapComponent
        latitude={selectedLocation ? [selectedLocation.latitude] : []}
        longitude={selectedLocation ? [selectedLocation.longitude] : []}
        selectedResult={selectedResult}
      />
    </div>
  );
}

export default SearchBoard;
