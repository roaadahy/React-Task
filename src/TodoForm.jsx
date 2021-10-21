import { useState } from "react";
import { addTodoAction } from './Redux/todoRedux.js'
import { useDispatch } from "react-redux";


const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  const dispatch = useDispatch();

  const addTodo = (task) => {
    dispatch(addTodoAction(task));
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <>
      <h2 className="text-center mx-5 mb-4 fw-bold">Add a TODO</h2>

      <form
        onSubmit={handleSubmission}
        className="d-flex flex-column align-items-center"
      >
        <div>
          <label className="me-3 mb-4 fw-bold fs-4">Title</label>
          <input
            type="text"
            name="title"
            style={{ width: "30em", height: "2.2em" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="me-3 fw-bold fs-4">Content</label>
          <textarea
            name="content"
            value={content}
            style={{ width: "32.5em", height: "6em" }}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button
          className="mt-4 mb-5 btn btn-primary btn-sm px-4 fs-4 fw-bold"
          type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
