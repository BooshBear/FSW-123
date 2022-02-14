import './App.css';
import TodoList from './TodoList';
import {useState} from "react";
import { dataList } from './STORE/STORE';

function App() {
  const [todos, setTodos] = useState(dataList)

  const completeTodo = id => {
    const tempList = [...todos];
    const index = tempList.findIndex(todos => todos.id === id);
    tempList[index].isCompleted = !tempList[index].isCompleted;
    setTodos(tempList);
  };

  const deleteTodo = (id) => {
    const tempList = [...todos];
    const newList = tempList.filter((todos) => todos.id !== id);
    setTodos(newList);
  }

  return (
    <>
      <h1>List of Todos</h1>
      <TodoList todos = {todos} completeTodo = {completeTodo} deleteTodo = {deleteTodo}/>
    </>
  );
}

export default App;
