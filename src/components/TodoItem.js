import { useStore } from "../hooks";
import { deleteTodo } from "../store/actions";

const TodoItem = ({ todo, id }) => {
  const [state, dispatch] = useStore();

  return (
    <div className="item-todo">
      <p>{todo}</p>
      <button onClick={() => dispatch(deleteTodo(id))}>X</button>
    </div>
  );
};

export default TodoItem;
