/* eslint-disable */
import React from "react";

const PopularItem = (props) =>{
    return (
        <div className="post">
            <div className="col-md-6-lg-3">
                <div className="volunteer">
                    <div className="img" style={{backgroundImage: 'url('+props.image+')'}}>

                    </div>
                    <div className="text text-4">
                        <h3>{props.title}</h3>
                        <span>{props.description}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularItem