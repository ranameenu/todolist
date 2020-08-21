import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Add Todo"
            />
          </div>
          <button className="btn btn-primary btn-sm">Add Todo</button>
        </div>
      </div>
    );
  }
}

export default AddTodo;
