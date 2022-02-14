

function Todo( {todo, completeTodo, deleteTodo} ) {
  return (
    <>
      <input type="checkbox" checked={todo.isCompleted} onChange={() => completeTodo(todo.id)}></input>
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </>
  )
}

export default Todo;