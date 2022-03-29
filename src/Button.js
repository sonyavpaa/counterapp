import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      value={props.value}
      onClick={props.click}
    >
      {props.text}
    </button>
  );
};

export default Button;
