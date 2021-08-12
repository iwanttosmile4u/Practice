import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { Header } from "./components/Header/Header";
import { Inbox } from "./components/Inbox/Inbox";
import { Footer } from "./components/Footer/Footer";

const emails = [
  { id: 1, topic: "Email 1 topic" },
  { id: 2, topic: "Email 2 topic" },
  { id: 3, topic: "Email 3 topic" },
];

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
        <Header title={title} user={user} />
        <Inbox
          incrementAge={this.incrementAge}
          updateTitle={this.updateTitle}
          emails={emails}
        />
        <Footer />
        {/* {user.cart.length === 0 && <div>Your cart: </div>}
        {!user.cart.length && <div>Your cart is empty</div>} */}
      </div>
    );
  }
}

export default App;
