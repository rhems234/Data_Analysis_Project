// FisheryData.jsx
import React from "react";

const FisheryData = ({ selectedFishery, fisheryData, selectedYear }) => {
  // 선택한 년도에 해당하는 데이터만 필터링
  const filteredData = fisheryData.filter(
    (data) => data.year.toString() === selectedYear
  );

  console.log("Filtered Data:", filteredData);

  return (
    <div>
      <h3>{selectedFishery}의 데이터</h3>
      <ul>
        {filteredData.map((data, index) => (
          <li key={index}>
            어장명: {data.fishery} - {data.year}년 {data.month}월<br />
            수심 : {data.depth}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FisheryData;
