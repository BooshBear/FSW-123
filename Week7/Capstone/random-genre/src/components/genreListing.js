import axios from "axios"
import { useState } from "react";

export default function GenreList() {
    var lst = []
    var {lst, setlst} = useState

    async function getList() {
        try {
            const res = await axios.get("https://binaryjazz.us/wp-json/genrenator/v1/genre/");
            lst.push(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <div>
            <ul>
                <li>pie</li>
            </ul>
        </div>
    );
}