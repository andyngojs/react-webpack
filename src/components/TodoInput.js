import { useRef } from "react";
import { useStore } from "../hooks";
import { setTodo, addTodo } from "../store/actions";

const TodoInput = () => {
  const [state, dispatch] = useStore();
  const { todoInput } = state;
  const todoRef = useRef();

  const handleAddTodo = () => {
    dispatch(addTodo(todoInput));
    dispatch(setTodo(""));
    todoRef.current.focus();
  };

  return (
    <>
      <input
        ref={todoRef}
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => dispatch(setTodo(e.target.value))}
        className="input-todo"
      />
      <button className="btn-add" onClick={handleAddTodo}>
        Add
      </button>
    </>
  );
};

export default TodoInput;
