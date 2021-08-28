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
    const generatedNumber = Math.floor(Math.random() * 36) + 1;
    this.setState({
      numbers: [...this.state.numbers, generatedNumber],
    });
  };

  deleteNumbers = (index) => {
    this.setState({
      numbers: this.state.numbers.filter((el, i) => i !== index),
    });
  };

  render() {
    const { numbers } = this.state;
    return (
      <div className="App">
        <Button content="Generate" handleClick={this.generateNumber} />
        <Numbers numbers={numbers} deleteNumbers={this.deleteNumbers} />
      </div>
    );
  }
}

export default App;
