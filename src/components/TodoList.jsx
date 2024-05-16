import React from "react";
import './Styles.css'

const TodoList = ({ todos, handleDelete, handleEdit, handleComplete }) => {
  return (
    <>
      {todos.map((t, index) => (
        <div className="todo-item">
          <span className="todoText" key={t.id}> </span>
          <p>Name         : {t.title}</p>
          <p>Description  : {t.description}</p>
          <div className="todo-item-filter">
            <p>Status:</p>
            <select value={t.status} onChange={(e, f) => handleComplete(t.id, e.target.value)}>
              <option value="Not Completed">Not Completed</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="todo-item-button">
            <button className="todo-item-button-left" onClick={() => handleEdit(t.id)}>Edit</button>
            <button className="todo-item-button-right"  onClick={() => handleDelete(t.id)}>Delete</button>
          </div>
        </div>
      ))}
    </>


  );
};

export default TodoList;
