import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class ArrayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [2, 3, 4, 6]
    };
  }
  render() {
    let i = 0;
    return (
      <ul>
        {this.state.arr.map(arr => (
          <li key={i}>{this.state.arr[i++]}</li>
        ))}
      </ul>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ArrayList />, rootElement);
