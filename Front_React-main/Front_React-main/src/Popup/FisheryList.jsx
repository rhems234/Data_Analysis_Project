// FisheryList.jsx
import React from "react";

const FisheryList = ({ fisheryList, handleFisheryClick }) => {
  return (
    <ul>
      {fisheryList.map((fishery, index) => (
        <li
          key={index}
          onClick={() => handleFisheryClick(fishery)}
          style={{ cursor: "pointer" }}
        >
          {fishery}
        </li>
      ))}
    </ul>
  );
};

export default FisheryList;
