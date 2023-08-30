import React from "react";
const LinkComponent = () => {
  return (
    <div style={{ display: "flex", gap: "30px" }}>

  
      <a
        href="https://www.nifs.go.kr/kodc/coo_list.kodc"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration : "none"}}
      >
        <img src="/img/link_1.png" alt="연안정지 관측자료"  style={{width : "100px"}}/>
        <p  style={{color : "black", textAlign : "center"}}>
          연안정지
          <br />
          관측자료
        </p>
      </a>
 

      <a
        href="https://www.nifs.go.kr/kodc/soo_list.kodc"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration : "none"}}
      >
        <img src="/img/link_2.png" alt="정선해양 관측자료" style={{width : "100px"}}/>
        <p style={{color : "black", textAlign : "center"}}>
          정선해양
          <br />
          관측자료
        </p>
      </a>
      <a
        href="https://www.nifs.go.kr/sois/"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration : "none"}}
      >
        <img src="/img/link_3.png" alt="위성해양 정보" style={{width : "100px"}}/>
        <p style={{color : "black", textAlign : "center"}}>
          위성해양
          <br />
          정보
        </p>
      </a>
      <a
        href="https://www.nifs.go.kr/risa/main.risa"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration : "none"}}
      >
        <img src="/img/link_4.png" alt="실시간 어장정보" style={{width : "100px"}}/>
        <p style={{color : "black", textAlign : "center"}}>
          실시간
          <br />
          어장정보
        </p>
      </a>
      <a
        href="https://www.nifs.go.kr/board/actionBoard0023List.do"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration : "none"}}
      >
        <img src="/img/link_5.png" alt="이상해황 정보" style={{width : "100px"}}/>
        <p style={{color : "black", textAlign : "center"}}>
          이상해황
          <br />
          정보
        </p>
      </a>
      <a
        href="https://www.nifs.go.kr/board/actionBoard0014List.do"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration : "none"}}
      >
        <img src="/img/link_6.png" alt="해어황정보" style={{width : "100px"}}/>
        <p style={{color : "black", textAlign : "center"}}>해어황정보</p>
      </a>
      <a
        href="https://www.nifs.go.kr/board/actionRedtideInfoList.do"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration : "none"}}
      >
        <img src="/img/link_7.png" alt="적조속보" style={{width : "100px"}}/>
        <p style={{color : "black", textAlign : "center"}}>적조속보</p>
      </a>
      <a
        href="https://www.nifs.go.kr/red/main.red"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration : "none"}}
      >
        <img src="/img/link_8.png" alt="적조경보" style={{width : "100px"}}/>
        <p style={{color : "black", textAlign : "center"}}>적조경보</p>
      </a>
      <a
        href="https://www.nifs.go.kr/board/actionBoard0022List.do"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration : "none"}}
      >
        <img src="/img/link_9.png" alt="해파리속보" style={{width : "100px"}}/>
        <p style={{color : "black", textAlign : "center"}}>해파리속보</p>
      </a>
      <a
        href="https://www.nifs.go.kr/board/actionBoard0021List.do"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration : "none"}}
      >
        <img src="/img/link_10.png" alt="패류독소 정보" style={{width : "100px"}}/>
        <p style={{color : "black", textAlign : "center"}}>
          패류독소
          <br />
          정보
        </p>
      </a>
    </div>
  );
};

export default LinkComponent;
