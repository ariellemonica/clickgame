import React from 'react';

function Card(props) {
    return (
        <div>
            <button>Click here</button>
            {/* <button onClick={props.handleClick(props.card.id)}><img src={props.card.image}></img></button> */}
        </div>
    )
}

export default Card;