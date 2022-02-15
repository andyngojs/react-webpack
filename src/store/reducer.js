import { ADD_TODO, DELETE_TODO, SET_TODO } from "./constant";

const initState = {
  todos: [],
  todoInput: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      const newState = [...state.todos];
      newState.splice(action.payload, 1);

      return {
        ...state,
        todos: newState,
      };
    default:
      throw new Error("Invalid Action");
  }
};

export { initState };
export default reducer;
