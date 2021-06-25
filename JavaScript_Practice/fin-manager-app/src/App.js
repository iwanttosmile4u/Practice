import React, { Component } from "react";
import "./App.css";
import Balance from "./components/Balance/Balance";

class App extends Component {
  state = {
    balance: 0,
    transactions: [],
  };

  render() {
    return (
      <div className="App">
        <Balance balance={this.state.balance} />
        <button onClick={this.onIncrease}>Plus 1</button>
        <button onClick={this.onDecrease}>Minus 1</button>
        <hr />
        {this.state.transactions.length === 0
          ? "Transactions dont`t exist"
          : this.state.transactions.map(({ label }) => <p>{label}</p>)}
      </div>
    );
  }

  onIncrease = () => {
    const { balance, transactions } = this.state;
    console.log({ balance, transactions });
    this.setState({
      ...this.state,
      balance: balance + 1,
      transactions: [
        ...transactions,
        {
          label: "increase",
          value: 1,
        },
      ],
    });
  };

  onDecrease = () => {
    const { balance, transactions } = this.state;
    this.setState({
      ...this.state,
      balance: balance - 1,
      transactions: [
        ...transactions,
        {
          label: "decrease",
          value: -1,
        },
      ],
    });
  };
}

export default App;
