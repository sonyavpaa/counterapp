import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <div className="mainContainer">
      <div className="circle">
        <p className="sum"></p>
      </div>
      <div className="buttonContainer">
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
};

export default Main;
