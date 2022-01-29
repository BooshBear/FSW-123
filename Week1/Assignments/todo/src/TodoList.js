

function TodoList() {
  let data = ["Do Homework", "Study", "Clean House", "Do Dishes"]
    return (
      <>
        <div id={"wrapper"}>
          <input type={"checkbox"}></input><h3> {data[0]}</h3>
        </div>
        <div id={"wrapper"}>
          <input type={"checkbox"}></input><h3> {data[1]}</h3>
        </div>
        <div id={"wrapper"}>
          <input type={"checkbox"}></input><h3> {data[2]}</h3>
        </div>
        <div id={"wrapper"}>
          <input type={"checkbox"}></input><h3> {data[3]}</h3>
        </div>
      </>
    );
  }
  
export default TodoList;