import './App.css';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import {useState} from "react";
import { dataList } from './STORE/STORE';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState(dataList)

  const addTodo = text => {
    const tempList = [...todos];
    const obj = {
      id: uuidv4(), 
      text: `${text}`,
      isCompleted: false
    }
    tempList.push(obj);
    setTodos(tempList);
  }

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
      <TodoForm addTodo = {addTodo}/>
      <h3 id='ifEmpty'></h3>
      <TodoList todos = {todos} completeTodo = {completeTodo} deleteTodo = {deleteTodo}/>
    </>
  );
}

export default App;
