import React, { useState, useEffect } from "react";

const Title = () => {
  // const [time, setTime] = useState("");

  const getNow = () => {
    const today = new Date();
    const mon = today.getMonth() + 1;
    const day = today.getDate();
    const you = today.getDay();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    const youbi = ["日", "月", "火", "水", "木", "金", "土"];
    const now = `${mon}月${day}日(${youbi[you]})${hour}時${minutes}分${seconds}秒`;
    document.getElementById("time").innerHTML = now;
    // return console.log(s);
  };

  useEffect(() => {

  }, [])

  // const timerID = () => setInterval(getNow, 1000)

  return (
    <>
      <h1>Todo App</h1>
      <p id="time">{setInterval(getNow, 1000)}</p>
    </>
  );
};

export default Title;
