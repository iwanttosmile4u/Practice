import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Button from "./components/Button/Button";
import Numbers from "./components/Numbers/Numbers";

class App extends React.Component {
  state = {
    numbers: [],
  };

  generateNumber = () => {
    if (this.state.numbers.length >= 6) {
      return;
    }
    const generatedNumber = Math.floor(Math.random() * 6) + 1;
    if (
      !this.state.numbers.includes(
        generatedNumber && this.state.numbers.length < 6
      )
    ) {
      this.setState({ numbers: [...this.state.numbers, generatedNumber] });
    } else {
      this.generateNumber();
    }
    // this.setState({ numbers: [...this.state.numbers, generatedNumber] });
  };

  deleteNumber = (index) => {
    this.setState({
      numbers: this.state.numbers.filter((el, i) => i !== index),
    });
  };

  render() {
    const { numbers } = this.state;
    return (
      <div className="App">
        <Button
          content="Generate"
          handleClick={this.generateNumber}
          disabled={this.state.numbers.length === 6}
        />
        <Numbers numbers={numbers} deleteNumber={this.deleteNumber} />
      </div>
    );
  }
}

export default App;
