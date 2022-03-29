import React, { Component } from "react";

import Button from "./Button";

class Main extends Component {
  state = {
    counter: 0,
  };

  addValue = (e) => {
    this.setState({
      counter: this.state.counter + parseInt(e.target.value),
    });
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div className="mainContainer">
        <div className="circle">
          <p className="sum">{this.state.counter}</p>
        </div>
        <div className="buttonContainer">
          <Button text="Add five" value="5" click={this.addValue} />
          <Button text="Add one" value="1" click={this.addValue} />
          <Button text="Remove" click={this.reset} />
          <Button text="Remove one" value="-1" click={this.addValue} />
          <Button text="Remove five" value="-5" click={this.addValue} />
        </div>
      </div>
    );
  }
}

export default Main;
