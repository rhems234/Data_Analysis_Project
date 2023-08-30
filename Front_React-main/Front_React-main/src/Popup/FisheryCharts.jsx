// Charts.jsx
import React from "react";

const Charts = () => {
  return (
    <div style={{ flex: 1 }}>
      <iframe
        src="https://public.tableau.com/shared/F8KCTQKK9?:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true"
        width={500}
        height={500}
        title="시각화 데이터"
        frameborder="1"
      ></iframe>
    </div>
  );
};

export default Charts;
