import React from "react";
import "./App.scss";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="container">
      <h1 className="title-header">Todo</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}
