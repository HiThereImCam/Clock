import "./styles.css";
import moment from "moment";
import Clock from "/src/ios_clock.svg";
import { useEffect, useState } from "react";

export default function App() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentTime(moment().format("LTS"));
    }, 1000);
    return () => clearInterval(interval);
  }, [currentTime]);

  return (
    <div className="App">
      {currentTime}
      <div className="clock-container">
        <img src={Clock} />
        <div className="hours-container">
          <div className="hours">hours</div>
        </div>
        <div className="minutes-container">
          <div className="minutes">minutes</div>
        </div>
        <div className="seconds-container">
          <div className="seconds"></div>
        </div>
      </div>
    </div>
  );
}
