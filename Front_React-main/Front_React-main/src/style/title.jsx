import { useEffect } from "react";

function Title() {
  useEffect(() => {
    document.title = "빈산소 분석 및 시각화"; // 타이틀 설정
  });

  return null;
}

export default Title;
