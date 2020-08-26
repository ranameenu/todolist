import React, { Component } from "react";

class TodoItem extends Component {
  onClick = () => {
    const { deleteTodo } = this.props;
    const { id } = this.props.values;

    deleteTodo(id);
    // this.props.deleteTodo(this.props.values.id)
  };

  render() {
    const { title, completed } = this.props.values;

    return (
      <li className="list-group-item">
        {title}
        <button
          className="btn btn-danger btn-sm ml-2 float-right"
          onClick={this.onClick}
        >
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
