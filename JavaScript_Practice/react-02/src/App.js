import { render } from "@testing-library/react";
import * as React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}

export class App extends React.Component {
  state = {
    title: "Mail client",
    user: {
      name: "John",
      age: 23,
    },
    emails: [
      { id: 1, title: "Title1", text: "Text1" },
      { id: 2, title: "Title2", text: "Text2" },
      { id: 3, title: "Title3", text: "Text3" },
    ],
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
    const { title, user, emails } = this.state;
    return (
      <div>
        <Header title={title} />
        <Body
          user={user}
          incrementAge={this.incrementAge}
          updateTitle={this.updateTitle}
          emails={emails}
        />
        <Footer />
        <Welcome name="Den" />
        <Welcome name="Ann" />
        <Welcome name="Piter" />
      </div>
    );
  }
}

export class Comment extends React.Component {
  render() {
    return (
      <div className="Comment">
        <UserInfo user={this.props.author} />
        <div className="Comment-text">{this.props.text}</div>
        <div className="Comment-date">{this.props.date}</div>
      </div>
    );
  }
}

export class Avatar extends React.Component {
  render() {
    return (
      <img
        className="Avatar"
        src={this.props.user.avatarUrl}
        alt={this.props.user.name}
      />
    );
  }
}

export class UserInfo extends React.Component {
  render() {
    return (
      <div className="UserInfo">
        <Avatar user={this.props.user} />
        <div className="UserInfo-Name">{this.props.user.name}</div>
      </div>
    );
  }
}

// const numbers = [1, 2, 3, 4, 5, 6];
// export const listItems = numbers.map((number) => <li>{number}</li>);

// export class NumberList extends React.Component {
//   render() {
//     const numbers = this.props.numbers;
//     const listItems = numbers.map((number) => <li>{number}</li>);
//     return <ul>{listItems}</ul>;
//   }
// }
