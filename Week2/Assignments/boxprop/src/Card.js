

const Card = (props) => {
    const styler = {
        backgroundColor: props.bcolor,
        width: props.width
    }

    return (
        <div className="box" style={styler}>
            <h2>{props.title}</h2>
            <h3>{props.subTitle}</h3>
            <p>{props.desc}</p>
        </div>
    );
}

export default Card;