import React from "react";

import "./btn.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Btn = ({ id, className, onClick, text }) => {
  return (
    <button id={id} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Btn;
