import React, { useState, useEffect } from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuid } from "uuid";
// import Paper from "@mui/material";
// import AppBar from "@mui/material";
// import Toolbar from "@mui/material";
// import Grid from "@mui/material";

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("Todos") || "[]");
  //    const initialTodos = [
  //   { id: 1, task: "Wash Dishes", completed: false },
  //   { id: 2, task: "Walk the dog", completed: false },
  //   { id: 3, task: "Called Anna", completed: false },
  // ];
  const [todos, setTodos] = useState(initialTodos);
  useEffect(() => {
    window.localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS With Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        // direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ marginTop: "1rem" }}
      >
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
