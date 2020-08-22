import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onClick = () => {
    if (this.state.title !== "") {
      this.props.addTodo(this.state.title);

      // Reset or title
      this.setState({ title: "" });
    }
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Add Todo"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
              required
            />
          </div>
          <button className="btn btn-primary btn-sm" onClick={this.onClick}>
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

export default AddTodo;
