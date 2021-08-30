import React, { Component } from "react";
import Error500 from "../Error500/Error500";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return <Error500 />;
    }
    return children;
  }
}
