import React, { Component } from "react";
import AddTodo from "./AddTodo";
import SearchTodos from "./SearchTodos";
import TodoItem from "./TodoItem";

class Todos extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Go to lunch",
        completed: false,
      },
      {
        id: 3,
        title: "Call to boss",
        completed: false,
      },
    ],
  };

  addTodo = (text) => {
    let copyTodos = this.state.todos;

    const newTodo = {
      id: "",
      title: text,
      completed: false,
    };

    copyTodos = [...copyTodos, newTodo];

    this.setState({ todos: copyTodos });
  };

  render() {
    return (
      <div>
        <h1 className="text-center mb-4">Todo List</h1>

        <AddTodo addTodo={this.addTodo} />

        <div className="card mt-4">
          <div className="card-body">
            <SearchTodos />

            <hr />

            <ul className="list-group mt-5">
              {this.state.todos.map((todo) => (
                <TodoItem key={todo.id} values={todo} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Todos;
