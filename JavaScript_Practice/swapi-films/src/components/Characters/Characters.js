import React, { Component } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";

export default class Characters extends Component {
  state = {
    isLoading: true,
    characters: [],
  };

  componentDidMount() {
    const { characters } = this.props;
    const request = characters.map((c) => axios(c));
    Promise.all(request).then((res) => {
      const names = res.map((r) => r.data.name);
      this.setState({ characters: names, isLoading: false });
    });
  }
  render() {
    const { characters, isLoading } = this.state;
    return (
      <div>
        {isLoading && <Loader />}
        {!isLoading && characters.join(", ")}
      </div>
    );
  }
}
