import * as React from "react";
import "../App.css";

function Footer() {
  return (
    <div>
      <footer id="wrap">
        <nav>
          <a href="https://github.com/rhems234/Front_React.git">FrontEnd</a> |
          <a href="https://github.com/rhems234/Back_Spring.git">BackEnd</a>  |
          <a href="https://github.com/rhems234/Back_Spring.git">BigData</a>
        </nav>
        <p>
          <span>팀원 : 박준성, 김용진, 송윤아, 한호정</span>
          <br />
          <span>이메일 : rhems234@gmail.com</span> <br />
          <span>Copyright 2023. cocoder. All Rights Reserved.</span>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
