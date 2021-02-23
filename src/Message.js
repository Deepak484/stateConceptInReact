import React from "react";

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Demo message"
    };
  }
  changeMessage() {
    this.setState({
      message: "hello i am changed message"
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Click me</button>
      </div>
    );
  }
}
export default Message;
