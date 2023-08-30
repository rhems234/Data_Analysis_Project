import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, FormSelect, Card, Pagination } from "react-bootstrap";
import ChartFrame from "../Charts/ChartFrame";

const fisheryOptions = [
  "강구",
  "감포",
  "가로림만",
  "가막만",
  "거제도남안",
  "거제도동안",
  "고창",
  "고성",
  "고성자란만",
  "곰소만",
  "군산",
  "금강하구",
  "기장",
  "낙동강하구",
  "대정",
  "도암만",
  "득량만",
  "마산만",
  "목포",
  "보령",
  "부산",
  "사천",
  "삼척",
  "서귀포",
  "섬진강하구",
  "성산",
  "속초",
  "죽변",
  "조천",
  "태안",
  "통영",
  "통영외안",
  "표선",
  "한강하구",
  "한림",
  "함평",
  "양양",
  "영광",
  "영덕",
  "영산강하구",
  "영일만",
  "울산",
  "울진",
  "월포",
  "인천",
  "제주",
  "진도",
  "진해만",
];

function ApiSearch({ onLocationChange, onResultSelect }) {
  const resultsPerPage = 5;
  const pagesPerBlock = 10;

  const [searchFishery, setSearchFishery] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchMonth, setSearchMonth] = useState("");
  const [searchDay, setSearchDay] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFishery, setSelectedFishery] = useState("진해만");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fisheryData = {
    진해만: {
      id: "진해만",
      src: "https://public.tableau.com/views/_16923391787230/sheet0?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    },
    인천: {
      id: "인천",
      src: "https://public.tableau.com/views/_16923391787230/sheet1?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    },
    천수만: {
      id: "천수만",
      src: "https://public.tableau.com/views/_16923391787230/sheet2?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    },
    보령: {
      id: "보령",
      src: "https://public.tableau.com/views/_16923391787230/sheet3?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    },
    군산: {
      id: "군산",
      src: "https://public.tableau.com/views/_16923391787230/sheet4?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    },
    속초: {
      id: "속초",
      src: "https://public.tableau.com/views/_16923391787230/sheet5?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    },
    영광: {
      id: "인영광천",
      src: "https://public.tableau.com/views/_16923391787230/sheet6?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true",
    },
  };
  useEffect(() => {
    setTotalPages(Math.ceil(searchResults.length / resultsPerPage));
  }, [searchResults]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = () => {
    setIsSearching(true);
    axios
      .get("/api/temperature/search", {
        params: {
          fishery: searchFishery,
          year: searchYear,
          month: searchMonth,
          day: searchDay,
        },
      })
      .then((response) => {
        setIsSearching(false);
        setSearchResults(response.data);
        setCurrentPage(1);

        if (response.data.length > 0) {
          const { latitude, longitude } = response.data[0];
          const selectedLocation = {
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
          };
          onLocationChange(selectedLocation);
          onResultSelect();
          setSelectedFishery(searchFishery);
        }
      })
      .catch((error) => {
        setIsSearching(false);
        console.log(error);
      });
  };

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = searchResults.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

  const renderPaginationItems = () => {
    const totalBlocks = Math.ceil(totalPages / pagesPerBlock);
    const currentBlock = Math.ceil(currentPage / pagesPerBlock);

    const startPage = (currentBlock - 1) * pagesPerBlock + 1;
    const endPage = Math.min(startPage + pagesPerBlock - 1, totalPages);

    const paginationItems = [];

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    return paginationItems;
  };

  return (
    <div>
      <h2 style={{ textAlign: "left" }}>어장 검색</h2>
      <table align="left">
        <tbody>
          <tr>
            <th>
              <label htmlFor="FisheryInput">어장명</label>
            </th>
            <td>
              <FormSelect
                aria-label="Default select example"
                id="FisheryInput"
                value={searchFishery}
                onChange={(e) => {
                  setSearchFishery(e.target.value);
                  setSelectedFishery(e.target.value); // 어장을 변경할 때 selectedFishery 업데이트
                }}
              >
                <option value="none">== 선택 ==</option>
                {fisheryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </FormSelect>
            </td>
            <th>
              <label style={{ marginLeft: "20px" }} htmlFor="YearInput">
                년도
              </label>
            </th>
            <td>
              <FormSelect
                aria-label="Default select example"
                id="YearInput"
                value={searchYear}
                onChange={(e) => setSearchYear(e.target.value)}
              >
                <option value="none">전체</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
              </FormSelect>
            </td>
            <th>
              <label style={{ marginLeft: "20px" }} htmlFor="MonthInput">
                월
              </label>
            </th>
            <td>
              <FormSelect
                aria-label="Default select example"
                id="MonthInput"
                value={searchMonth}
                onChange={(e) => setSearchMonth(e.target.value)}
              >
                <option value="none">전체</option>
                <option value="12">12</option>
                <option value="11">11</option>
                <option value="10">10</option>
                <option value="9">9</option>
                <option value="8">8</option>
                <option value="7">7</option>
                <option value="6">6</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </FormSelect>
            </td>
            <th>
              <Button
                type="submit"
                onClick={handleSearch}
                disabled={isSearching}
                style={{ marginLeft: "20px" }}
              >
                검색
              </Button>
            </th>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <h2 style={{ textAlign: "left" }}>검색 결과</h2>
      {isSearching ? (
        <p>검색 중...</p>
      ) : currentResults.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-5">
          {currentResults.map((result, index) => (
            <div key={index} className="col mb-4">
              <Card>
                <Card.Body>
                  <Card.Text>
                    지역명: {result.fishery}
                    <br />
                    {result.year}년 {result.month}월 {result.day}일
                    <br />
                    시간: {result.time} <br />
                    경도: {result.longitude} <br />
                    위도: {result.latitude} <br />
                    수심: {result.depth}m <br />
                    DO : {result.doint.toFixed(2)} mg/L
                  </Card.Text>
                  <Button
                    variant="success"
                    onClick={() => onResultSelect(result)}
                  >
                    지도에서 보기
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}

      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} />
        {renderPaginationItems()}
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} />
      </Pagination>

      <ChartFrame selectedFishery={selectedFishery} fisheryData={fisheryData} />
    </div>
  );
}

export default ApiSearch;
