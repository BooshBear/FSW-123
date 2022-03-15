

export default function GenerateLikes({likeAry, deleteLike}) {
    if (likeAry.length == 0) {
        return (
            <h3>
                It seems you don't have any likes
                you should probably add some.
            </h3>
        )
    } else {
        return (
            <ul>
                {likeAry.map((element) => {
                    return (
                        <li key={element.id}>
                            {element.title} <button id="delete"onClick={() => deleteLike(element.id)}>X</button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}