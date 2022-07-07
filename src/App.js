import "./styles.css";
import moment from "moment";
import { useEffect, useState } from "react";

export default function App() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentTime(moment().format("LTS"));
    }, 1000);
    return () => clearInterval(interval);
  }, [currentTime]);

  return <div className="App">{currentTime}</div>;
}
