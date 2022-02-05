import './App.css';
import TodoList from './TodoList';
import { todos } from './storefile/Store';

function App() {
  return (
    <>
      <h1>List of Todos</h1>
      <TodoList data = {todos}/>
    </>
  );
}

export default App;
