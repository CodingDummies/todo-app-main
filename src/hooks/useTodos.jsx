import { useState } from "react";

import { todoList } from "../data";

const ALL = "ALL";
const ACTIVE = "ACTIVE";
const COMPLETED = "COMPLETED";

const useTodos = (init = null) => {
  const [todos, setTodos] = useState(init === null ? todoList : init);
  const [filter, setFilter] = useState(ALL);

  const clearCompleted = () => {
    const filterCompletedTodos = todos.filter((todo) => !todo.active);
    setTodos(filterCompletedTodos);
  };

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, active: !todo.active } : todo,
      ),
    );
  };

  const getTodosLeft = () => {
    return todos.filter((todo) => !todo.active).length;
  };

  const onDragEnd = (source, destination) => {
    if (source === destination) return;

    const newTodos = [...todos];
    const [todo] = newTodos.splice(source, 1);
    newTodos.splice(destination, 0, todo);
    setTodos(newTodos);
  };

  const filteredTodos = () => {
    switch (filter) {
      case ALL:
        return todos;
      case ACTIVE:
        return todos.filter((todo) => !todo.active);
      case COMPLETED:
        return todos.filter((todo) => todo.active);
      default:
        throw new Error(`Invalid todo filter: ${filter}`);
    }
  };

  const actions = {
    addTodo: addTodo,
    removeTodo: removeTodo,
    toggleTodo: toggleTodo,
    getTodosLeft: getTodosLeft,
    onDragEnd: onDragEnd,
    changeFilter: changeFilter,
    clearCompleted: clearCompleted,
    selected: filter,
  };

  return [filteredTodos(), actions];
};

export default useTodos;
