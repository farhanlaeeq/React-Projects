import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

export class BoxList extends Component {
  constructor(props) {
    super(props);

    this.state = { Todos: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  create(newBox) {
    this.setState({
      Todos: [...this.state.Todos, newBox],
    });
  }

  remove(id) {
    this.setState({
      Todos: this.state.Todos.filter((t) => t.id !== id),
    });
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.Todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, Todo: updatedTask };
      }
      return todo;
    });
    this.setState({ Todos: updatedTodos });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.Todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    this.setState({ Todos: updatedTodos });
  }
  render() {
    const Todos = this.state.Todos.map((todo) => (
      <Todo
        Todo={todo.Todo}
        key={todo.id}
        id={todo.id}
        removeTodo={this.remove}
        updateTodo={this.update}
        completed={todo.completed}
        toggleCompleted={this.toggleCompletion}
      />
    ));
    return (
      <div className="TodoList">
        <h1>
          ToDo List! <span>A simple react todo list</span>
        </h1>
        <ul>{Todos}</ul>
        <NewTodoForm createBox={this.create} />
      </div>
    );
  }
}

export default BoxList;
