import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  
  return (
    <div className="text-center py-2 container">
      <TodoForm  />
       <TodoList  />

    </div>
  );
}

export default Todo;
