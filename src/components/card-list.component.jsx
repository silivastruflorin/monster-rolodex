import React from 'react';

export const CardList = props => {
    console.log(props);
    return (<div id={props.name}>{props.name}</div>)
}