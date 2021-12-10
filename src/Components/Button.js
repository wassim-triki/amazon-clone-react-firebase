import React from "react";
import "./Button.css";
const Button = ({ text, onClick, type }) => {
  return (
    <button className="btn" onClick={onClick} type={type ? type : ""}>
      {text}
    </button>
  );
};

export default Button;
