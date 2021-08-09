import { div } from "prelude-ls";
import React from "react";
import { render } from "react-dom";
import "./App.css";

// export class App extends React.Component {
//   state = {
//     currentUser: {
//       name: "John",
//       age: 33,
//     },
//   };
//   incrAge() {
//     const { currentUser } = this.state;
//     this.setState({
//       currentUser: { ...currentUser, age: ++currentUser.age },
//     });
//   }
//   render() {
//     const { currentUser } = this.state;
//     console.log(currentUser);
//     const name = currentUser ? currentUser.name : "Unnamed";
//     const age = currentUser ? currentUser.age : "-0";
//     return (
//       <div>
//         <p className="user-name">
//           {name} is {age} years old
//         </p>
//         <button onClick={() => this.incrAge()} className="change-age-btn">
//           Incr age
//         </button>
//       </div>
//     );
//   }
// }

export class NewApp extends React.Component {
  state = {
    user: null,
    posts: [],
  };

  handleLogin() {
    const name = prompt("What is your name?");
    const age = prompt("How old are you?");

    this.setState({ user: { name, age } });
  }

  handleCreatePost() {
    const postContent = prompt("What do you think?");
    const { posts } = this.state;
    posts.push(postContent);
    this.setState({
      posts: [...posts],
    });
  }

  render() {
    const { user, posts } = this.state;
    const postsContent = posts.map((singlePost) => (
      <div>
        <p>{user.name}</p>
        <p>Text:</p>
        <p>{singlePost}</p>
      </div>
    ));

    return (
      <div className="container">
        {!user && <button onClick={() => this.handleLogin()}>Login</button>}
        {user && (
          <div>
            <h1>Hello {user.name}</h1>
            <button onClick={() => this.handleCreatePost()}>Create post</button>
          </div>
        )}
        <div>{postsContent}</div>
      </div>
    );
  }
}
