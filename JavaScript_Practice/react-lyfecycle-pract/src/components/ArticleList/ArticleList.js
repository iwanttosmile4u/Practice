import React, { Component } from 'react';
import Article from '../Article/Article';

export default class ArticleList extends Component {
    render() {
        const {articles} = this.props;
        const articleElements = articles.map(article =>
            <li key={article.id}><Article article={article} /></li>)
        return (
           <ul>
               {articleElements}
           </ul>
        )
    }
}
