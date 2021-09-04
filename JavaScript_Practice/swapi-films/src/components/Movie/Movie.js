import React, { Component } from "react";
import Characters from "../Characters/Characters";

export default class Movie extends Component {
  state = {
    expanded: false,
  };

  expandMovie = () => {
    this.setState({ expanded: true });
  };

  render() {
    const { expanded } = this.state;
    const { movie } = this.props;
    return (
      <li>
        <div>
          {movie.name}
          {!expanded === true && (
            <button onClick={this.expandMovie}>Show more</button>
          )}
        </div>
        {expanded === true && <div>Episode: {movie.episodeId}</div>}
        {expanded === true && <div>Captions: {movie.openingCrawl}</div>}
        {expanded === true && (
          <div>
            Characters: <Characters characters={movie.characters} />
          </div>
        )}
      </li>
    );
  }
}
