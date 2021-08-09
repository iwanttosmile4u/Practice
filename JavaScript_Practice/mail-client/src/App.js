import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    title: "Mail client",
    user: {
      name: "John",
      age: 23,
      email: "admin@",
      cart: [],
    },
  };

  updateTitle = () => {
    this.setState({ title: "Updated title" });
  };

  incrementAge = () => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        age: user.age + 1,
      },
    });
  };

  render() {
    const { title, user } = this.state;
    return (
      <div className="App">
        <h2>{title}</h2>
        <h3>Some other text</h3>
        <div>{user.name}</div>
        <div>{user.age}</div>
        <button onClick={this.incrementAge}>Increment age</button>
        <button onClick={this.updateTitle}>Update title</button>
        {user.email && <div className="email">{user.email}</div>}
        {/* {user.cart.length === 0 && <div>Your cart: </div>}
        {!user.cart.length && <div>Your cart is empty</div>} */}
      </div>
    );
  }
}

export default App;
