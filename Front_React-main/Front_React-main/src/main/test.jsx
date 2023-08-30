import React, { useState, useEffect } from "react";
import axios from "axios";

function InputSample() {
  // 'name' 상태를 정의하고 초기값은 빈 문자열로 설정
  const [sigungu, setSigungu] = useState("");
  const [dataFromServer, setDataFromServer] = useState("");

  // 데이터를 가져오는 useEffect
  useEffect(() => {
    if (sigungu) {
      // 'name' 상태가 비어있지 않을 때에만 요청 보내기
      axios
        .get(`/mongo/data?sigungu=${sigungu}`)
        .then((response) => setDataFromServer(response.data))
        .catch((error) => console.log(error));
    }
  }, [sigungu]);

  const handleChange = (event) => {
    setSigungu(event.target.value);
  };

  const handleConfirm = () => {
    // '확인' 버튼을 클릭하면 useEffect가 실행되어 요청 보내기
    // useEffect에서 'name' 상태가 변경되어 요청을 보낼 것임
  };

  return (
    <div>
      <input value={sigungu} onChange={handleChange} />
      <button onClick={handleConfirm}>확인</button>
      <div>
        <b>지역 : </b> {dataFromServer.sigungu}
      </div>
    </div>
  );
}

export default InputSample;
