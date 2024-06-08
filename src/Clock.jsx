import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  const [franceTime, setFranceTime] = useState(
    new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })
  );
  const [americaTime, setAmericaTime] = useState(
    new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
  );
  const [australiaTime, setAustraliaTime] = useState(
    new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setTime(now);
      setFranceTime(now.toLocaleString("fr-FR", { timeZone: "Europe/Paris" }));
      setAmericaTime(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
      setAustraliaTime(now.toLocaleString("en-AU", { timeZone: "Australia/Sydney" }));
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  function formatTime() {
    let hours = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let milli = time.getMilliseconds();

    let meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(min)}:${padZero(sec)}:${padZeroMillis(milli)}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  function padZeroMillis(number) {
    return number.toString().padStart(3, "0");
  }

  return (
    <>
    <h2 color="green"><b>Flash is Everywhere!</b></h2>
    <div className="clock-container">
      <div className="clock">
        <p>Local Time: {formatTime()}</p>
        <p>Time in France: {franceTime}</p>
        <p>Time in America: {americaTime}</p>
        <p>Time in Australia: {australiaTime}</p>
      </div>
    </div>
    </>
  );
}

export default Clock;
