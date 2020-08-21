import React, { Component } from "react";
import AddTodo from "./AddTodo";
import SearchTodos from "./SearchTodos";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center mb-4">Todo List</h1>

        <AddTodo />

        <div className="card mt-4">
          <div className="card-body">
            <SearchTodos />

            <hr />

            <ul className="list-group mt-5">
              <TodoItem />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Todos;
