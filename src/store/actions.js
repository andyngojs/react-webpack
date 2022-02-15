import { SET_TODO, ADD_TODO, DELETE_TODO } from "./constant";

const setTodo = (payload) => {
  return {
    type: SET_TODO,
    payload,
  };
};

const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export { setTodo, addTodo, deleteTodo };
