import * as React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    user: null,
    posts: [],
  };

  handleLogin() {
    const name = prompt("What is your name?");
    const age = +prompt("How old are you");

    this.setState({
      user: { name, age },
    });
  }

  handleCreatePost() {
    const postContent = prompt("Enter your post");
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
        <p>Author: {user.name}</p>
        <p>Text</p>
        <p>{singlePost}</p>
      </div>
    ));

    return (
      <div className="container">
        {!user && <button onClick={() => this.handleLogin()}>Login</button>}
        {user && (
          <div>
            <h1>Hello {user.name}!</h1>
            <button onClick={() => this.handleCreatePost()}>create post</button>
          </div>
        )}
        <div>{postsContent}</div>
      </div>
    );
  }
}

// class App extends React.Component {
//   state = {
//     currentUser: {
//       name: "gogi",
//       age: 55,
//     },
//   };

//   incrAge() {
//     const { currentUser } = this.state;
//     this.setState({
//       currentUser: {
//         name: `${currentUser.name}-changed`,
//         age: ++currentUser.age,
//       },
//     });
//   }

//   render() {
//     const { currentUser } = this.state;
//     const name = currentUser ? currentUser.name : "Unnamed";
//     const age = currentUser ? currentUser.age : "-0";

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             {name} is {age} years old
//           </p>
//           <button onClick={() => this.incrAge()}>incr age</button>
//           <h1>
//             Something <code>src/App.js</code> and save to reload.
//           </h1>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>
//           Something <code>src/App.js</code> and save to reload.
//         </h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
