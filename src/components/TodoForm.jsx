import React from "react";
import './Styles.css'

const TodoForm = ({ handleSubmit, todo,tododesc, editId, setTodo,setTodoDesc }) => {
  return (
    <>
    <p className="todoform-item">My todo</p>
    <form className="todoForm" onSubmit={handleSubmit}>
        
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}  placeholder="Enter Name" />
      <input type="text" value={tododesc} onChange={(e) => setTodoDesc(e.target.value)} placeholder="Enter Description"  />
      <button className="todo-add-button" type="submit"> {editId ? "Edit" : "Add"}</button>
    </form>
    </>
  );
};

export default TodoForm;
