import { useState } from "react";
import ApiSearch from "./ApiSearch";
import MapComponent from "./MapComponent";
import Popup from "../Popup/Popup";
import { Badge } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

function Kmap({ searchedMarkerPosition }) {
  const [selectedResult, setSelectedResult] = useState();
  const [selectedLocation, setSelectedLocation] = useState(); // 변경된 부분: 선택된 위치의 위도, 경도 상태
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openWindowPopup = () => {
    setIsPopupOpen(true); // 팝업 열기
  };

  return (
    <div>
      <Stack direction="horizontal" gap={2} style={{ textAlign: "right" }}>
        <Badge bg="dark">
          <div style={{ textAlign: "right" }}>
            <h4>
              {/* <div> 엘리먼트 클릭 시 팝업 실행 */}
              <div onClick={openWindowPopup} style={{ cursor: "pointer" }}>
                통계 검색
              </div>
            </h4>
          </div>
          {/* Popup 컴포넌트를 조건부로 렌더링 */}
          {isPopupOpen && (
            <Popup isOpen={true} onClose={() => setIsPopupOpen(false)} />
          )}
        </Badge>
      </Stack>

      <ApiSearch
        onResultSelect={(result, location) => {
          setSelectedResult(result);
          setSelectedLocation(location); // 변경된 부분: 선택된 위치의 위도, 경도 상태 업데이트
        }}
      />

      <MapComponent
        latitude={selectedLocation ? [selectedLocation.latitude] : []}
        longitude={selectedLocation ? [selectedLocation.longitude] : []}
        searchedMarkerPosition={searchedMarkerPosition}
        selectedResult={selectedResult}
      />
    </div>
  );
}

export default Kmap;
