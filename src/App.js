import "./styles.css";
import moment from "moment";
import Clock from "/src/ios_clock.svg";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [currentTime, setCurrentTime] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const hoursHand = () => {
    let hoursDeg = hours * 30 + minutes / 2;
    return {
      transform: `rotate(${hoursDeg}deg)`
    };
  };

  const minutesHand = () => {
    let minuteDeg = minutes * 6;
    return {
      transform: `rotate(${minuteDeg}deg)`
    };
  };
  const secondsHand = () => {
    let secondDeg = seconds * 6;
    return {
      transform: `rotate(${secondDeg}deg)`
    };
  };

  // const secondsHand = (seconds) => {
  //   console.log("seconds: ", seconds);
  //   let secondsAngle = seconds * 6;
  //   console.log("secondsAngle: ", secondsAngle);
  //   // secondsRef.current.style.webKitTransform = `rotateZ(${secondsAngle}deg)`;
  //   secondsRef.current.style.transform = `rotateZ(${secondsAngle}deg)`;
  // };
  // const secondsDeg = {
  //   transform: `rotate(${seconds}deg)`
  // };
  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentTime(moment().format("LTS"));
      setHours(moment().hour());
      setMinutes(moment().minute());
      setSeconds(moment().second());
    }, 1000);
    return () => clearInterval(interval);
  }, [currentTime]);

  return (
    <div className="App">
      {currentTime}

      <div className="clock-container">
        <img src={Clock} />
        <div className="hours-container">
          <div className="hours" style={hoursHand()}></div>
        </div>
        <div className="minutes-container">
          <div className="minutes" style={minutesHand()}></div>
        </div>
        <div className="seconds-container">
          <div style={secondsHand()} className="seconds"></div>
        </div>
      </div>
    </div>
  );
}
