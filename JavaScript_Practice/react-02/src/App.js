import { render } from "@testing-library/react";
import * as React from "react";
import "./App.css";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>
//           Hello, {this.props.name} {this.props.surname}
//         </h1>
//       </div>
//     );
//   }
// }

function App(props) {
  return <h1>Hello, {props.name}</h1>;
}

export function RenderApp() {
  return (
    <div>
      <App name="July" />
      <App name="Kate" />
      <App name="Tania" />
    </div>
  );
}

export function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
}

export function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

export function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h2>Now is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export const numbers = [1, 2, 3, 4, 5, 6];

export function ListItem(props) {
  return <li>{props.value}</li>;
}
export function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}

export function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}
export const posts = [
  { id: 1, title: "Hello, world!", content: "Welcome to the world React!" },
  { id: 2, title: "New title", content: "New post" },
];

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Water boiled</p>;
  }
  return <p>Water didn`t boil</p>;
}

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "", scale: "c" };
  }
  handleCelsiusState = (temperature) => {
    this.setState({ scale: "c", temperature });
  };
  handleFarenheitState = (temperature) => {
    this.setState({ scale: "f", temperature });
  };
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const farenheit =
      scale === "c" ? tryConvert(temperature, toFarenheit) : temperature;
    return (
      <div>
        <TemparatureInput
          scale="c"
          temperature={celsius}
          onTemparatureChange={this.handleCelsiusState}
        />
        <TemparatureInput
          scale="f"
          temperature={farenheit}
          onTemparatureChange={this.handleFarenheitState}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

const scaleNames = {
  c: "Celsium",
  f: "Farengeit",
};

class TemparatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "" };
  }
  handleChange = (e) => {
    // this.setState({ temperature: e.target.value });
    this.props.onTemparatureChange(e.target.value);
  };
  render() {
    // const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter the temperature in degree {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

function toCelsius(farenheit) {
  return ((farenheit - 32) * 5) / 9;
}

function toFarenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
// console.log(tryConvert("10.22", toFarenheit));
export default App;
