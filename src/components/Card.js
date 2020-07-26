import React from 'react';

function Card(props) {
    return (
        <button className='card' id={props.id} onClick={() => props.handleClick(props.id)}>
            <div className='img-container'>
                <img alt={props.id} src={props.image}/>
            </div>
            {/* <div className='content'>
                <ul>
                    <li>Card Id Test: {props.id}</li>
                </ul>
            </div> */}
            {/* <button>Click here</button> */}
            {/* <button onClick={props.handleClick(props.card.id)}><img src={props.card.image}></img></button> */}
            {/* <img src={props.card.image} onClick={props.handleClick(props.card.id)}></img> */}
        </button>
    )
}

export default Card;