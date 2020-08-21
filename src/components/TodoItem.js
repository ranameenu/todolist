import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { id, todo, completed } = this.props.values;

    return (
      <li className="list-group-item">
        {todo}
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
