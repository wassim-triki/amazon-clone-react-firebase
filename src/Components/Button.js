import React from "react";
import "./Button.css";
const Button = ({ text, onClick, type, disabled = false }) => {
  return (
    <button
      className="btn"
      onClick={onClick}
      type={type ? type : ""}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
