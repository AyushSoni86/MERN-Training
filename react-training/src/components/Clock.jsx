import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  const updateTimer = () => {
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  };

  useEffect(() => {
    updateTimer();
  }, []);

  return <div>{time}</div>;
};

export default Clock;
