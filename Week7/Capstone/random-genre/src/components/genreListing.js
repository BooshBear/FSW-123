import axios from "axios"
import { useState } from "react";

var lst = []

export default function GenreList() {
    var  [lzt, setLzt] = useState(lst)

    async function getList() {
        const templzt = [...lzt]
        try {
            const res = await axios.get("https://binaryjazz.us/wp-json/genrenator/v1/genre/");
            templzt.push(res.data)
            setLzt(templzt)
        } catch (err) {
            console.log(err)
        }
    }
    if (lzt.length < 6) {
        getList();
    }
    if (lzt.length == 6) {
        return (
            <div>
                <h3>
                    Wait for it to stop and look one up
                    if you like that genre click the button
                    next to it to add it to the like list.
                </h3>
                <ul>
                    {lzt.map((element) => {
                        return (
                            <li key={element}>
                                {element}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    } else {
        return (
            <h1>Loading...</h1>
        )
    }  
}