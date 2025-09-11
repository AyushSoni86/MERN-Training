import React from "react";

const Weather = ({ temperature }) => {
  if (temperature >= 25) {
    return <div>It's sunny today!</div>;
  }
  if (temperature < 10) {
    return <div>It's cold today!</div>;
  }

  return <div>Its a normal day nothing especial</div>;
};

export default Weather;
