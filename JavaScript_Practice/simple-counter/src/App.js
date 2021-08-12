import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    number: 50,
    step: 5,
  };

  decreaseCount = () => {
    const { number, step } = this.state;
    const nextNumber = number - step;
    if (nextNumber > 0) {
      this.setState({ number: nextNumber });
    }
  };

  increaseCount = () => {
    const { number, step } = this.state;
    const nextNumber2 = number + step;
    if (nextNumber2 < 100) {
      this.setState({ number: nextNumber2 });
    }
  };

  decreaseStep = () => {
    const { step } = this.state;
    if (step >= 1) {
      this.setState({ step: step - 1 });
    }
  };

  increaseStep = () => {
    const { step } = this.state;
    if (step <= 10) {
      this.setState({ step: step + 1 });
    }
  };

  changeNumber = (event) => {
    const { value } = event.target;
    if (value < 1) {
      this.setState({ step: 1 });
      return;
    }
    if (value <= 10) {
      this.setState({ step: value });
    }
  };

  render() {
    const { number, step } = this.state;
    return (
      <div className="App">
        <div>
          <button onClick={this.decreaseCount}>-</button>
          {number}%<button onClick={this.increaseCount}>+</button>
        </div>
        <div>
          <button onClick={this.decreaseStep}>-</button>
          {step}
          <button onClick={this.increaseStep}>+</button>
        </div>
        <input onChange={this.changeNumber} value={step} />
      </div>
    );
  }
}

export default App;
