import axios from "axios";
import React, { useEffect, useState } from "react";
import { Popout } from "react-portal-popout";
import FisheryList from "./FisheryList";
import Chartsa from "../Charts/Chartc";
import Chartsb from "../Charts/Chartd";
import { Row, Col } from "react-bootstrap";

const PopoutContent = ({ isOpen, onClose }) => {
  const [fisheryList, setFisheryList] = useState([]);
  const [selectedFishery, setSelectedFishery] = useState(null); // 선택한 어장명
  const [fisheryData, setFisheryData] = useState([]); // 선택한 어장명에 대한 데이터
  const [selectedYear, setSelectedYear] = useState("2022"); // 기본값 설정

  useEffect(() => {
    // 최초 팝업이 열릴 때 한 번만 API 요청 보내기
    axios
      .get("/api/temperature/fishery")
      .then((response) => {
        // API로부터 어장명 데이터를 가져와서 상태 변수에 저장
        setFisheryList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching fisheries:", error);
      });
  }, []); // 빈 배열을 전달하여 최초 마운트 시에만 실행

  const handleFisheryClick = (fishery) => {
    // 선택한 어장명에 대한 데이터를 가져오는 API 요청 보내기
    axios
      .get("/api/temperature/fishery/data", {
        params: {
          fishery: fishery,
        },
      })
      .then((response) => {
        // API로부터 어장명에 대한 데이터를 가져와서 처리
        setFisheryData(response.data);
        console.log(response.data); // 가져온 데이터를 활용하여 표시하도록 수정
      })
      .catch((error) => {
        console.error("Error fetching fishery data:", error);
      });

    setSelectedFishery(fishery); // 선택한 어장명 저장
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return isOpen ? (
    <Popout closePortal={onClose} isOpen={isOpen} title="모니터링">
      <h2>
        <strong>모니터링 통계검색</strong>
      </h2>
      <hr />
      <select name="choice" onChange={handleYearChange} value={selectedYear}>
        <option value="2022">2022년</option>
        <option value="2021">2021년</option>
        <option value="2020">2020년</option>
        <option value="2019">2019년</option>
        <option value="2018">2018년</option>
        <option value="2017">2017년</option>
        <option value="2016">2016년</option>
        <option value="2015">2015년</option>
        <option value="2014">2014년</option>
        <option value="2013">2013년</option>
        <option value="2012">2012년</option>
        <option value="2011">2011년</option>
        <option value="2010">2010년</option>
        <option value="2009">2009년</option>
        <option value="2008">2008년</option>
        <option value="2007">2007년</option>
      </select>
      <hr />
      <Row>
        <div
          className="pop-content"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Col>
            {/* 어장명 리스트 */}
            <div style={{ flex: 1 }}>
              <h3>어장명 리스트</h3>
              <FisheryList
                fisheryList={fisheryList}
                handleFisheryClick={handleFisheryClick}
              />
            </div>
          </Col>

          <Col>
            <div style={{ flex: 1 }}>
              <div style={{ display: "center" }}>
                <Chartsa
                  selectedFishery={selectedFishery}
                  fisheryData={fisheryDataa}
                />
                <Chartsb
                  selectedFishery={selectedFishery}
                  fisheryData={fisheryDatab}
                />
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </Popout>
  ) : null;
};

const fisheryDataa = {
  진해만: {
    id: "진해만",
    src: "https://public.tableau.com/views/test_16923404862730/sheet2?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
  },
};

const fisheryDatab = {
  진해만: {
    id: "진해만",
    src: "https://public.tableau.com/views/test_16923404862730/DO2022?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
  },
};

export default PopoutContent;
