import React from "react";

export const GeoLocation = ({geo}) => {
    return(
           
        <div> 
            <dl>
                <dt>Geo Location:</dt>
                    <dd>
                        <li>Latitude: {geo.lat}</li>
                    </dd>
                    <dd>
                        <li>Longitude: {geo.lng}</li>
                    </dd>
            </dl>           
            
        </div>
    );
}