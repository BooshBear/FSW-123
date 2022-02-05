

function TodoList(props) {
    let stuff = props.data
    let map1 = stuff.map((item, index) => {
      return (
        <li key={item.text}>{item.text}</li>
      )
    })
    return (
      <>
        <ul>
          {map1}
        </ul>
      </>
    );
  }
  
export default TodoList;