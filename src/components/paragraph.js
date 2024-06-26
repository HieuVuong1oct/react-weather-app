import React from "react";

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Paragraph = ({ city, date, indexData }) => {
  return (
    <>
      <p className="mb-2">{date}</p>
      <p className="mb-2">Tên thành phố: {city.name}</p>
      <p className="mb-2">Quốc gia: {city.country}</p>
      <p className="mb-2">Nhiệt độ hiện tại: {indexData?.main.temp} °C</p>
      <p className="mb-2">Nhiệt độ cao nhất: {indexData?.main.temp_max} °C</p>
      <p className="mb-2">Nhiệt độ thấp nhất: {indexData?.main.temp_min} °C</p>
      <p className="mb-2">Độ ẩm: {indexData?.main.humidity} %</p>
      <p className="mb-2">Tầm nhìn:{indexData?.visibility} m</p>
      <p className="mb-2">Tốc độ gió: {indexData?.wind.speed} m/s</p>
      <p className="mb-2">Độ che phủ mây: {indexData?.clouds.all}</p>
    </>
  );
};

export default Paragraph;
