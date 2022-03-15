import { useState } from "react";

export default function LikesForm({addLike}) {
    const [txt, setText] = useState('');
    
    const ifEmpty = (txt) => {
        if (txt === "") {
            document.getElementById('ifEmpty').innerHTML = "Box can't be empty"
        } else {
            document.getElementById('ifEmpty').innerHTML = ""
            addLike(txt);
        }
    }
    return (
        <>
            <input type="text" onChange={e => setText(e.target.value)}></input>
            <button id="addBut" onClick={() => ifEmpty(txt)}>Add Like</button>
        </>
    )
}