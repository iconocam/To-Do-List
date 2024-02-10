import { useState } from "react";
import data from "../data";

const TodoList = () => {
  const [todos, setTodos] = useState(data);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo !== "") {
      const newTask = {
        userId: 1,
        id: todos.length + 1,
        title: newTodo,
        completed: false,
      };
      setTodos([newTask, ...todos]);
      setNewTodo("");
    }
  };

  const handleInputChange = (evt) => {
    setNewTodo(evt.target.value);
  };

  const deleteTodo = (taskId) => {
    setTodos(todos.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === taskId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (taskId) => {};

  const save = (taskId) => {};

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add new task"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button onClick={addTodo}>Add</button>
      {todos.map((task) => (
        <div key={task.id}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            {task.title}
          </label>
          <button
            onClick={() => deleteTodo(task.id)}
            disabled={!task.completed}
          >
            Delete
          </button>
          <button onClick={() => editTodo(task.id)}>Edit</button>
          <button onClick={() => save(task.id)}>Save</button>
        </div>
      ))}
    </>
  );
};

export default TodoList;
