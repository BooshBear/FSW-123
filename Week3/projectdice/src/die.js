import image1 from "./Rd6/Dice1.png"
import image2 from "./Rd6/Dice2.png"
import image3 from "./Rd6/Dice3.png"
import image4 from "./Rd6/Dice4.png"
import image5 from "./Rd6/Dice5.png"
import image6 from "./Rd6/Dice6.png"

function Die({dice}) {
    let pic;
    switch (dice) {
        case 1:
            pic = image1;
            break;
        case 2:
            pic = image2;
            break;
        case 3:
            pic = image3;
            break;
        case 4:
            pic = image4;
            break;
        case 5:
            pic = image5;
            break;

        case 6:
            pic = image6;
            break;
        default:
            break;
    }
    return (
        <img width="200" height="200" src={pic}/>
    )
}

export default Die;