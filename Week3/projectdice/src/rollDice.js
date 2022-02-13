import {useState} from "react";
import Die from './die.js';

export default function RollDice() {
    const randomDice = () => {
        return Math.floor(Math.random()*(6) + 1)
    }

    const [theDie, setDie] = useState(randomDice)
    const [theDie2, setDie2] = useState(randomDice)

    const changeDie = () => {
        setDie(randomDice)
        setDie2(randomDice)
    }

    return (
        <>
            <div>
                <Die 
                    dice = {theDie}
                />
                <Die
                    dice = {theDie2}
                />
            </div>
            <button onClick={changeDie}> Roll Dice </button>  
        </>
    )
}