import React, { PureComponent } from "react";

import "./Overlay.css";

class Overlay extends PureComponent {
  state = {
    height: 0
  };

  componentDidMount() {
    this.onSetPageHeight();
  }

  onSetPageHeight = () => {
    const height = document.documentElement.scrollHeight + 150;
    this.setState({
      height
    });
  };

  render() {
    const { height } = this.state;
    return (
      <div className="Overlay" style={{ height }}>
        <img src="/images/moon flower.png" alt="first flower" />
        <img src="/images/moon flower.png" alt="second flower" />
        <img src="/images/moon flower.png" alt="third flower" />
        <img src="/images/moon flower2.png" alt="fourth flower" />
        <img src="/images/moon flower2.png" alt="fifth flower" />
        <img src="/images/moon flower.png" alt="sixth flower" />
      </div>
    );
  }
}

export default Overlay;
