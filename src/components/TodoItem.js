import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <li className="list-group-item">
        Todo 1
        <button className="btn btn-danger btn-sm ml-2 float-right">
          delete
        </button>
        <button className="btn btn-secondary btn-sm float-right">
          complete
        </button>
      </li>
    );
  }
}

export default TodoItem;
