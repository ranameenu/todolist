import React, { Component } from "react";

class Todos extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center mb-4">Todo List</h1>

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

        <div className="card mt-4">
          <div className="card-body">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>

            <hr />

            <ul className="list-group mt-5">
              <li className="list-group-item">
                Todo 1
                <button className="btn btn-danger btn-sm ml-2 float-right">
                  delete
                </button>
                <button className="btn btn-secondary btn-sm float-right">
                  complete
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Todos;
