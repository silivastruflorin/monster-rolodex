import React from 'react';
import './card.style.css'

export const Card = props => {
    return(
        <div className='card-container' id={props.id}>
             <h1 id={props.monster.name}>{props.monster.name}</h1>
        </div>
    )
}