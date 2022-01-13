import React from "react";
import { GeoLocation } from "../geolocation/geolocation.component";

export const AdressBox = ({monsterObj}) => {
    return(
        <div>
            <h1>{monsterObj.address.street}</h1>
            <h1>{monsterObj.address.suite}</h1>
            <h1>{monsterObj.address.city}</h1>
            <GeoLocation geo={monsterObj.address.geo} />
            
        </div>    
    );
}