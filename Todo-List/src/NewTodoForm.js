import React, { Component } from "react";
import Box from "./Todo";
import uuid from "react-uuid";
import "./NewTodoForm.css";

export class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Todo: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.id]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    // idNo += 1;
    this.props.createBox({ ...this.state, id: uuid(), completed: false });
    this.setState({ Todo: "" });
  }

  render() {
    // let idNo = 0;
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="Todo">ADD NEW TASK:</label>
        <input
          type="text"
          id="Todo"
          value={this.state.Todo}
          onChange={this.handleChange}
          placeholder="Enter Todo"
        />
        <button>Add</button>
      </form>
    );
  }
}

export default NewTodoForm;
