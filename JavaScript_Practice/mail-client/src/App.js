import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { Header } from "./components/Header/Header";
import { Inbox } from "./components/Inbox/Inbox";
import { Footer } from "./components/Footer/Footer";
import axios from "axios";
import Loader from "./components/Loader/Loader";

class App extends Component {
  state = {
    title: "Mail client",
    emails: [],
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      axios("/emails.json").then((res) => {
        this.setState({ emails: res.data, isLoading: false });
      });
    }, 1500);
  }

  render() {
    const { title, emails, isLoading } = this.state;
    return (
      <div className="App">
        <Header title={title} />
        {isLoading && <Loader />}
        {!isLoading && <Inbox emails={emails} />}
        <Footer />
        {/* {user.cart.length === 0 && <div>Your cart: </div>}
        {!user.cart.length && <div>Your cart is empty</div>} */}
      </div>
    );
  }
}

export default App;
