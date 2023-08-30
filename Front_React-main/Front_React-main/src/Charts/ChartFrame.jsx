import React from "react";

function ChartFrame({ selectedFishery, fisheryData }) {
  return (
    <div style={{ flex: 1 }}>
      <iframe
        id={fisheryData[selectedFishery]?.id}
        src={fisheryData[selectedFishery]?.src}
        width={600}
        height={500}
        title="빈산소 통계"
      ></iframe>
    </div>
  );
}

export default ChartFrame;
