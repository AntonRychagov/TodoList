import React from "react";
import { observer } from "mobx-react";
import todoStore from "../stores/TodoStore";
import { Button, TextField } from "@mui/material";
import styled from "styled-components";

const Wrapper = StyleAddTodo();

const AddTodo: React.FC = observer(() => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      todoStore.addTodo();
    }
  };

  return (
    <Wrapper>
      <TextField
        label="Новая задача"
        variant="outlined"
        type="text"
        value={todoStore.newTodo}
        onChange={(e) => todoStore.setNewTodoText(e.target.value)}
        onKeyDown={handleKeyPress}
        autoFocus
      />
      <Button variant="outlined" onClick={() => todoStore.addTodo()}>
        Добавить
      </Button>
    </Wrapper>
  );
});

export default AddTodo;

function StyleAddTodo() {
  return styled.div`
    display: flex;
    gap: 20px;
  `;
}
