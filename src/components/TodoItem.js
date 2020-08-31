import React, { Component } from "react";

class TodoItem extends Component {
  onClick = () => {
    const { deleteTodo } = this.props;
    const { id } = this.props.values;

    deleteTodo(id);
    // this.props.deleteTodo(this.props.values.id)
  };

  isCompleted = () => {
    const { id } = this.props.values;

    this.props.completeTodo(id);
  };

  render() {
    const { title, completed } = this.props.values;

    return (
      <li className="list-group-item">
        <span className={`${completed === true ? "completed" : ""}`}>
          {title}
        </span>
        <button
          className="btn btn-danger btn-sm ml-2 float-right"
          onClick={this.onClick}
        >
          delete
        </button>
        <button
          className={`btn btn-sm float-right ${
            completed === true ? "btn-success" : "btn-secondary"
          }`}
          onClick={this.isCompleted}
        >
          {completed === true ? "completed" : "complete"}
        </button>
      </li>
    );
  }
}

export default TodoItem;
