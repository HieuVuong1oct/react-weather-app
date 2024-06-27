import React from "react";

import "./input.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Input = ({ input, setInput }) => {
  return (
    <input
      className="form-control rounded"
      type="text"
      id="city"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Thành phố"
    />
  );
};

export default Input;
