import React, { Component, useState } from "react";
import "./styles.css";
import Message from "./Message";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <Message />
      </div>
    );
  }
}

export default App;
