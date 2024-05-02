import { useState, useEffect } from "react";
const Head = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const time = new Date();
      const formattedTime = formatTime(time);
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = " am";

    if (hour > 12) {
      hour -= 12;
      am_pm = " pm";
    }
    if (hour === 0) {
      hour = 12;
      am_pm = " am";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    return hour + ":" + min + ":" + sec + am_pm;
  };

  return (
    <div className="head">
      <h1 className="brand-name">
        <span className="q-design">Q</span>{" "}
        <span className="news-design">News</span>
      </h1>
      <div className="clock">{currentTime}</div>
    </div>
  );
};

export default Head;
