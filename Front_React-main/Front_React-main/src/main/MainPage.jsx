import React from "react";
import { Row, Col } from "react-bootstrap";
import Title from "../style/title";
import Kmap from "../Map/kakaomap";
import NewsSearch from "./KakaoSeach";
import LinkComponent from "./site_link";
import Footer from "../style/footer";
import Header from "../style/header";
import Charta from "../Charts/Charta";
import Chartb from "../Charts/Chartb";
import "./Fonts.css";

function MainPage() {
  const [selectedLocation] = React.useState();

  return (
    <div className="container mt-5">
      <Title />
      <Header />

      <div>
        <Row>
          <Col md={8} className="border">
            <Kmap searchedMarkerPosition={selectedLocation} />
          </Col>

          <Col>
            <Row className="border">
              <h3 style={{ textAlign: "center", marginTop: "10px" }}>
                빈산소수괴 관련 웹 검색
              </h3>
              <Col style={{ overflowY: "auto", height: "800px" }}>
                <NewsSearch />
              </Col>
            </Row>
          </Col>

          <Col>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex" }}>
                <Charta />
              </div>
            </div>
          </Col>
          <Col>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex" }}>
                <Chartb />
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <h3>국립과학수산원 관련 서비스</h3>
        <br />
        <LinkComponent />
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
