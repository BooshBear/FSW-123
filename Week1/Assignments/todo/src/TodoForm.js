import { useState } from "react"

export default function TodoForm ( {addTodo} ) {
    const [txt, setText] = useState('');
    
    const ifEmpty = (txt) => {
        if (txt === "") {
            document.getElementById('ifEmpty').innerHTML = "Todo was empty"
        } else {
            document.getElementById('ifEmpty').innerHTML = ""
            addTodo(txt);
        }
    }

    return (
        <>
            <input type="text" onChange={e => setText(e.target.value)}></input>
            <button onClick={() => ifEmpty(txt)}>AddTodo</button>  
        </>
    )
}