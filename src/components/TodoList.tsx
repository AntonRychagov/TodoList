import React from "react";
import { observer } from "mobx-react";
import TodoItem from "./TodoItem";
import todoStore from "../stores/TodoStore";

const TodoList: React.FC = observer(() => {
  return (
    <ul>
      {todoStore.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
});

export default TodoList;
