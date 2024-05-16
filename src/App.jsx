import React, { useState } from "react";
import './components/Styles.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

const App = () => {
  const [todo, setTodo] = useState("");
  const [tododesc, setTodoDesc] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [uncompletedTodos, setUnCompletedTodos] = useState([]);
  const [filterscreen, setFilterscreen] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, title: todo, description: tododesc })
          : (t = { id: t.id, title: t.title, description: t.description })
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      setTodoDesc("");
      return;
    }

    if (todo !== "" && tododesc !== "") {
      let newTodoItem = {
        id: `${todo}-${Date.now()}`,
        title: todo,
        description: tododesc,
      };

      let updatedTodoArr = [...todos];
      console.log(updatedTodoArr)
      updatedTodoArr.push(newTodoItem);
      setTodos(updatedTodoArr);
      setTodo("");
      setTodoDesc("");
    }
  };



  const handleComplete = (e, f) => {
    let filteredItem = {
      ...todos[e],
      status: f,
    };

    if (f === "Completed") {
      let updatedCompletedArr = [...completedTodos];
      updatedCompletedArr.push(filteredItem);
      setCompletedTodos(updatedCompletedArr);
      handleDelete(e);
      localStorage.setItem(
        'completedTodos',
        JSON.stringify(updatedCompletedArr)
      );
      console.log(completedTodos)
    } else {
      let updatedUnCompletedArr = [...uncompletedTodos];
      updatedUnCompletedArr.push(filteredItem);
      setUnCompletedTodos(updatedUnCompletedArr);
      handleDelete(e);
      localStorage.setItem(
        'uncompletedTodos',
        JSON.stringify(updatedUnCompletedArr)
      );
      console.log(uncompletedTodos)
    }


  };

  const handleDelete = (id) => {
 
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };


  const handleFilter = (e) => {
    setFilterscreen(e);
  };


  const handleEdit = (id) => {
 
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.title);
    setTodoDesc(editTodo.description);
    setEditId(id);
  };




  return (
    <div className="App">
      <div className="container">
         <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          tododesc={tododesc}
          editId={editId}
          setTodo={setTodo}
          setTodoDesc={setTodoDesc}
        // setTodoStatus={setTodoStatus}
        />
        <TodoFilter
          handleFilter={handleFilter}
        />


        <div className="todo-display-list">
        <TodoList
          todos={todos}
          // filterscreen={filterscreen}
          // completedTodos={completedTodos}  
          // uncompletedTodos={uncompletedTodos}  
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
         </div>
      </div>
    </div>
  );
};

export default App;
