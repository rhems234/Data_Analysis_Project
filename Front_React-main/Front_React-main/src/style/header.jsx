import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../App.css";
import Interval from "./useInterval";

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <Row>
      <Col>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/img/logo.png"
            alt="이상해황 정보"
            style={{ width: "100px", height: "100px", marginBottom: "20px" }}
          />
          <h1 style={{ marginLeft: "10px", marginTop: "20px" }}>
            빈산소 수괴 분석 및 시각화
          </h1>
        </div>
      </Col>
      <Col class="row" style={{ float: "none", margin: "0 auto" }}>
        <div style={{ textAlign: "right" }}>
          <Interval />
        </div>
      </Col>
      <hr></hr>
    </Row>
  );
}

export default Header;
