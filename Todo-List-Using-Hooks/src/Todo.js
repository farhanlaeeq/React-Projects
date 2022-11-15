import React from "react";
import {
  Paper,
  List,
  ListItem,
  Divider,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import useToggle from "./Hooks/useToggleState";
import { Delete, Edit } from "@mui/icons-material";
import EditTodoForm from "./EditTodoForm";

function Todo({ task, completed, id, toggleTodo, removeTodo, editTodo }) {
  const [isEditing, toggle] = useToggle();
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          isEditing={isEditing}
          toggleEditing={toggle}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            onClick={() => {
              toggleTodo(id);
            }}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Edit"
              onClick={() => {
                toggle(!isEditing);
              }}
            >
              <Edit />
            </IconButton>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                removeTodo(id);
              }}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
