import React, { Component } from 'react';

export default class Article extends Component {
    state = {
        isOpen: false
    }

    // componentWillMount() {
    //     console.log("---", "mounting");
    // }


    handleClick = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        const body = isOpen && <section>{article.text}</section>;
        return (
            <div className="hello">
                <h2>{article.title}
                    <button onClick={this.handleClick}>{isOpen ? "Close" : "Open"}</button>
                </h2>
                {body}
                <h3>creation date: {(new Date()).toDateString()}</h3>
            </div>
        )
    }
}
