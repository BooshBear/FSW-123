

function Todo( {todo, completeTodo, deleteTodo} ) {
  const ifchecked = (todo) => {
    if (todo.isCompleted == true) {
      return <span id="line">{todo.text}</span>
    } else {
      return <span>{todo.text}</span>
    }
  }
  
  return (
    <>
      <input type="checkbox" checked={todo.isCompleted} onChange={() => completeTodo(todo.id)}></input>
      {ifchecked(todo)}
      <button onClick={() => deleteTodo(todo.id)}>X</button>
      <button onClick={}>Edit</button>
    </>
  )
}

export default Todo;