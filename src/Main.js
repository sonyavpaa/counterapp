import React, { Component } from "react";

import Button from "./UI_components/Button";

import classes from "./Main.module.css";

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
    let classStyle;
    if (this.state.counter === 0) {
      classStyle = `${classes.start}`;
    } else if (this.state.counter % 2 === 0) {
      classStyle = `${classes.evencolor}`;
    } else {
      classStyle = `${classes.oddcolor}`;
    }

    return (
      <div className={`${classes.mainContainer} ${classes.main}`}>
        <div className={` ${classes.circle} ${classStyle}`}>
          <p>{this.state.counter}</p>
        </div>
        <div className={classes.buttonContainer}>
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
