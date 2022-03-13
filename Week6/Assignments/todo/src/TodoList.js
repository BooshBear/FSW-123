import Todo from "./Todo";

function TodoList( {todos, completeTodo, deleteTodo} ) {
  return (
    <ul>
      {todos.map((listTodos, index) => {
        return (
          <li key={index}>
            <Todo todo = {listTodos}
            completeTodo = {completeTodo}
            deleteTodo = {deleteTodo}
            />
          </li>
        );
      })}
    </ul>
  );
  }

export default TodoList;