import React, { Component } from "react";

class Todos extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Todos;
