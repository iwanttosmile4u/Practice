import React, { Component } from 'react';
import "./Loader.css";

export default class Loader extends Component {

    // conponentDidMount() {
    //     console.log("Loader - componentDidMount")
    // }

    // componentWillUnmount() {
    //     console.log("Loader - componentWillUnmount")
    // }

    render() {
        return (
            <div className="loader">
                Loading...
            </div>
        )
    }
}
