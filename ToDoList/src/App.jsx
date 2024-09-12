import TodoInput from "./components/Todoinput";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:
      newList
    }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function handleDelete(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
    persistData(newTodoList)

  }

  function handleEdit(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDelete(index)
  }

  useEffect(()=>{
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }

      localTodos = JSON.parse(localTodos).todos
      setTodos(localTodos)
  },[])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEdit={handleEdit} handleDelete={handleDelete} todos={todos} />
    </>
  );
}

export default App;
