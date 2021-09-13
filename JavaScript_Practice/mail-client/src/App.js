import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { Inbox } from "./components/Inbox/Inbox";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import Loader from "./components/Loader/Loader";

const App = () => {
  // state = {
  //   title: "Mail client",
  //   emails: [],
  //   isLoading: true,
  // };

  // componentDidMount() {
  //   setTimeout(() => {
  //     axios("/emails.json").then((res) => {
  //       this.setState({ emails: res.data, isLoading: false });
  //     });
  //   }, 1500);
  // }
  const [emails, setEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("inside useEffect - Executed after each render");

    setTimeout(() => {
      axios("/api/emails").then((res) => {
        setEmails(res.data);
        setIsLoading(false);
      });
    }, 1500);
    return () => {
      console.log("return in useEffect");
    };
  }, []);

  return (
    <div className="App">
      <Header />
      {isLoading && <Loader />}
      {!isLoading && <Inbox emails={emails} />}
      <Footer />
      {/* {user.cart.length === 0 && <div>Your cart: </div>}
        {!user.cart.length && <div>Your cart is empty</div>} */}
    </div>
  );
};

export default App;
