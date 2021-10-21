import { useSelector } from "react-redux";
import { deleteTodoAction } from "./Redux/todoRedux.js";
import { useDispatch } from "react-redux";

const TodoList = () => {
  const todoState = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteTodo = (index) => {
    dispatch(deleteTodoAction(index));
  };



  const todosList =
  todoState && todoState.length > 0 ? (
    todoState.map((todo, i) => {
        return (
          <ul key={i}>
            <li className="border d-flex">
            <div className="text">
              <p>Title : {todo.title}</p>
              <p>Content : {todo.content}</p>
              <button className="mt-4 mb-3 mx-auto btn btn-danger btn-sm px-4 fs-4 fw-bold w-25" type="button"
                onClick={() => deleteTodo(i)}>X</button>
            </div>
            </li>
          </ul>
        );
      })
      
    ) : (
      
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
};


export default TodoList;
