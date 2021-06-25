import "./App.css";
import React from "react";

export default class App extends React.Component {
  state = {
    color: "blue",
    title: "Big pretty title!",
  };
  changeColor(newColor) {
    console.log(`We\`re changing ${this.state.color} color to ${newColor}`);
    this.setState({ color: newColor });
  }
  render() {
    return (
      <div
        className="App"
        style={{
          height: "500px",
          backgroundColor: this.state.color,
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "30px",
        }}
      >
        <h2>{this.state.title}</h2>
        <Button text="red" handler={() => this.changeColor("red")} />
        <Button text="pink" handler={() => this.changeColor("pink")} />
        <Button text="gold" handler={() => this.changeColor("gold")} />
        <Button text="silver" handler={() => this.changeColor("silver")} />
      </div>
    );
  }
}

const Button = (props) => {
  return (
    <button onClick={props.handler} style={{ height: "30px" }}>
      {props.text}
    </button>
  );
};
