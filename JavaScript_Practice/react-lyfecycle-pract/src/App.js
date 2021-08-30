import logo from './logo.svg';
import './App.css';
import Article from './components/Article/Article';
import articles from "./fictures";

import React, { Component } from 'react'
import ArticleList from './components/ArticleList/ArticleList';

export default class App extends Component {
  state = {
    reverted: false
  }

  revert = () => {
    this.setState({
      reverted: !this.state.reverted
    })
  }

  render() {
    const {reverted} = this.state;
    return (
      <div>
        <h1>App name
          <button onClick={this.revert}>Revert</button>
        </h1>
        <ArticleList 
          articles={reverted ? articles.reverse() : articles}
         />
      </div>
    )
  }
}



