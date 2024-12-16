import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  let [todos, setTodos] = useState([{ task: "Sample-Task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (newTodo.trim()) {
      setTodos((prevTodo) => {
        return [...prevTodo, { task: newTodo, id: uuidv4() }];
      });
      setNewTodo(""); // Clear the input after adding
    }
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deletTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  let upperCaseAll = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <input
        placeholder="Add Task to do"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTask}>ADD Task</button>

      <br />
      <br />
      <br />
      <br />
      <hr />
      <h1>TodoList</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task} </span> &nbsp;&nbsp;&nbsp;
            <button onClick={() => deletTask(todo.id)}>Delete</button>
            <button onClick={() => upperCaseOne(todo.id)}>ToUppercase</button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>UpperCaseAll</button>
    </>
  );
}
