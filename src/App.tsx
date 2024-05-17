import React from "react";
import "normalize.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { Container, Typography } from "@mui/material";

const App: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ marginBottom: 2, marginTop: 2 }}>
        Список задач
      </Typography>
      <AddTodo />
      <TodoList />
    </Container>
  );
};

export default App;
