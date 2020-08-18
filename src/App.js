import React, { Component } from "react";
import Todos from "./components/Todos";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <Todos />
      </div>
    );
  }
}

export default App;
