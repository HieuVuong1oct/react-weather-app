import React from "react";

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Paragraph from "../paragraph";
const DisplayInfo = ({ city, index, icon, date, indexData }) => {
  return (
    <div key={index} className="card-body p-4">
      <img src={icon} alt="weather icon" />
      <Paragraph city={city} date={date} indexData={indexData} />
    </div>
  );
};
export default DisplayInfo;
