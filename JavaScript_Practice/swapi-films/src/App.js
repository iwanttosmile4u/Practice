import "./App.css";
import axios from "axios";
import React, { Component } from "react";
import Loader from "./components/Loader/Loader";
import MovieList from "./components/MovieList/MovieList";

export default class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    axios("https://ajax.test-danit.com/api/swapi/films").then((res) =>
      this.setState({ movies: res.data, isLoading: false })
    );
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading === true && <Loader />}
        <MovieList movies={movies} />
      </div>
    );
  }
}
