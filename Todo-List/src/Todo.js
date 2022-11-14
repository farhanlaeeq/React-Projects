import React, { Component } from "react";
import "./Todo.css";

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.Todo,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.toggleForm();
  }
  toggleCompletion() {
    this.props.toggleCompleted(this.props.id);
  }
  render() {
    let results;
    if (this.state.isEditing) {
      results = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>submit</button>
          </form>
        </div>
      );
    } else {
      results = (
        <div className="Todo">
          <li className={this.props.completed ? "completed Todo-task" : ""}>
            {this.props.Todo}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>
              <i className="fas fa-pen" />
            </button>
            <button onClick={this.toggleCompletion}>
              <i class="fas fa-check"></i>
            </button>
            <button onClick={this.handleRemove}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      );
    }

    return results;
  }
}

export default Todo;
