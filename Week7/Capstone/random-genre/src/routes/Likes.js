import GenerateLikes from "../components/likeList";
import LikesForm from "../components/likesForm";
import { useState } from "react";
import likeLst from "../dataLikeList";
import { v4 as uuidv4 } from 'uuid';

export default function Likes() {
    const [likes, setlikes] = useState(likeLst)

    const addLike = text => {
        const templikes = [...likes];
        const obj = {
            title: `${text}`,
            id: uuidv4()
        };
        templikes.push(obj);
        setlikes(templikes);
    }

    const deleteLike = (id) => {
        const templikes = [...likes];
        const newList = templikes.filter((likes) => likes.id !== id);
        setlikes(newList);
      }

    return (
        <div>
            <h2>Your Likes List</h2>
            <LikesForm addLike = {addLike}/>
            <h3 id='ifEmpty'></h3>
            <GenerateLikes likeAry = {likes} deleteLike = {deleteLike}/>
        </div>
    );
}