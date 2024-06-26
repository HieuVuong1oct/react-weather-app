import React from "react";

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Coordinates = ({ lat, lon }) => {
  return (
    <div>
      <p>Vĩ độ Bắc: {lat}</p>
      <p>Kinh độ Đông: {lon}</p>
    </div>
  );
};

export default Coordinates;
