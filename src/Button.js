import React from "react";

const Button = (props) => {
  return (
    <div className="buttonFrame">
      <p>{props.number}</p>
    </div>
  );
};

export default Button;
