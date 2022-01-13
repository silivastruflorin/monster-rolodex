import React from 'react';
import './card.style.css'
import { NameBox } from '../name-box/name-box.component';
import { EmailBox } from '../email-box/email-box.component';
import { AdressBox } from '../adress-box/adress-box.component';

export const Card = props => {
    return(
        <div className='card-container' id={props.id}>
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt='robot'></img>
            <NameBox monsterObj={props.monster} />
            <EmailBox monsterObj={props.monster} />
            <AdressBox monsterObj={props.monster} />
        </div>
    )
}