import { observer } from "mobx-react";
import todoStore from "../stores/TodoStore";
import { Todo } from "../stores/TodoStore";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import { Divider, Typography } from "@mui/material";
import styled from "styled-components";

const { Box, Inner } = StyleTodoItem();

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = observer(({ todo }) => {
  return (
    <li>
      <Box>
        <Inner>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => todoStore.toggleTodoCompletion(todo.id)}
          />
          <Typography
            variant="h5"
            className={todo.completed ? "completed" : ""}
          >
            {todo.text}
          </Typography>
        </Inner>
        <DeleteIcon
          onClick={() => todoStore.removeTodo(todo.id)}
          sx={{ color: red[700], cursor: "pointer" }}
        />
      </Box>
      <Divider sx={{ border: "solid 0.5px" }} />
    </li>
  );
});

export default TodoItem;

function StyleTodoItem() {
  const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 10px;
    border-radius: 5px;
  `;

  const Inner = styled.div`
    display: flex;
    gap: 15px;
  `;
  return { Box, Inner };
}
