import React, { Component } from "react";
import Movie from "../Movie/Movie";

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    const movieItem = movies.map((item) => (
      <Movie key={item.id} movie={item} />
    ));
    return (
      <div>
        <ol>{movieItem}</ol>
      </div>
    );
  }
}
