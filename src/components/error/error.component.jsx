import React, { Component } from "react";

import "./error.styles.scss";

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isHidden: true });
    }, 5000);
  }

  render() {
    const { errorMessage } = this.props;
    const isVisible = !this.state.isHidden;
    console.log("IsVisible? " + isVisible);
    return (
      <div>{isVisible ? <h3 className="error">{errorMessage}</h3> : null}</div>
    );
  }
}

export default Error;
