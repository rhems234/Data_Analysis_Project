import React from "react";

const Charta = () => {
  return (
    <div style={{ flex: 1 }}>
      <iframe
        src="https://public.tableau.com/views/test_16923404862730/Sheet1?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true"
        width={600}
        height={500}
        title="빈산소 통계"
        frameborder="1"
      ></iframe>
    </div>
  );
};

export default Charta;
