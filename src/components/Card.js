import React from 'react';
// import CardArray from '../components/CardArray.json'
// import dataCard from '../CardArray.json'

function Card(props) {
    return (
        // <>
        // <p>This is the card component.</p>
        // <div className='card'>
        //     <div className='img-container'>
        //         <img alt='some text' src={props.image}></img>
        //     </div>
        // </div>
        // </>
        <div className='card'>
            <button className='img-container'>
                <img alt={props.id} src={props.image} />
            </button>
            {/* <div className='content'>
                <ul>
                    <li>Card Id Test: {props.id}</li>
                </ul>
            </div> */}
            {/* <button>Click here</button> */}
            {/* <button onClick={props.handleClick(props.card.id)}><img src={props.card.image}></img></button> */}
            {/* <img src={props.card.image} onClick={props.handleClick(props.card.id)}></img> */}
        </div>
    )
}

export default Card;