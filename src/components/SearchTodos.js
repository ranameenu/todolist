import React, { Component } from "react";

class SearchTodos extends Component {
  render() {
    return (
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Search" />
      </div>
    );
  }
}

export default SearchTodos;
