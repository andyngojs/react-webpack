import TodoItem from "./TodoItem";
import { useStore } from "../hooks";

const TodoList = () => {
  const [state] = useStore();
  return (
    <div className="container-list">
      {state.todos.map((todo, index) => {
        return <TodoItem key={index} todo={todo} id={index} />;
      })}
    </div>
  );
};

export default TodoList;
