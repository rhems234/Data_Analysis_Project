import React from "react";

function Chartsb({ selectedFishery, fisheryData }) {
  return (
    <div style={{ flex: 1 }}>
      <iframe
        id={fisheryData[selectedFishery]?.id}
        src={fisheryData[selectedFishery]?.src}
        width={700}
        height={400}
        title="빈산소 통계"
      ></iframe>
    </div>
  );
}

export default Chartsb;
