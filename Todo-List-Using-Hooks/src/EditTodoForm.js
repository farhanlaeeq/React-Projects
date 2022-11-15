import React from "react";
import {
  Typography,
  Paper,
  AppBar,
  Toolbar,
  Grid,
  TextField,
  IconButton,
} from "@mui/material";
import { Cancel } from "@mui/icons-material";
import useInputState from "./Hooks/useInputState";

export default function EditTodoForm({
  editTodo,
  id,
  task,
  isEditing,
  toggleEditing,
}) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editTodo(id, value);
          reset();
          toggleEditing(!isEditing);
        }}
        style={{ marginLeft: "1rem", width: "50%" }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          label="Edit Todo"
          fullWidth
          autoFocus
        />
      </form>
      <Cancel style={{ margin: "1rem" }} onClick={toggleEditing} />
    </>
  );
}
