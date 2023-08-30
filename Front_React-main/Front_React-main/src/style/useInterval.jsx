import { useState } from "react";
import Moment from "react-moment";
import { useInterval } from "use-interval";

function Interval() {
  const [nowTime, setNowTime] = useState(Date.now());

  const body = {
    color: "#17D4FE",
    fontSize: "40px",
    direction: "horizontal",
  };

  useInterval(() => {
    setNowTime(Date.now());
  }, 1000);

  return (
    <div>
      <Moment format={"HH:mm:ss"} className={"moment-box"} style={body}>
        {nowTime}
      </Moment>
    </div>
  );
}

export default Interval;