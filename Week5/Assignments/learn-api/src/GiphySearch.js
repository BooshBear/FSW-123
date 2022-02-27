import axios from "axios";
import {useState} from 'react'

function GiphySearch() {
    const initialUrl = "https://media1.giphy.com/media/xTiTnf9SCIVk8HIvE4/giphy-downsized.gif?cid=bba80fc9ht4t41ojdkmgg031hykwln2x98rzegnfezyy74gv&rid=giphy-downsized.gif&ct=g";
    const [input, setInput] = useState();
    const [TheUrl, setTheUrl] = useState(initialUrl);

   function imgSrc(theUrl) {
         axios.get(theUrl)
        .then(res0 => {
            setTheUrl(res0.data.data[0].images.downsized.url) 
        })
        .catch(err => console.log(err))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const userInpt = input;
        console.log(userInpt);
        const apiKey = "sE5Wvmx3A5KlxhZsrjR1tIpJ1GAx2gnt"
        const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${userInpt}&limit=5&offset=0&rating=pg-13&lang=en`;
        imgSrc(giphyUrl)
    }
   
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                type="text"
                id="user"
                onChange={e => setInput(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            <img src={TheUrl} alt="loading..."/>
        </div>
    );
}

export default GiphySearch;