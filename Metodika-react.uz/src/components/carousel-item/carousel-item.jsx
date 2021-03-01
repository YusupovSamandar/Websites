import React from 'react';
import './carousel-item.css';


const carouselItem = (props) => {
    return (
        <div className="carousel-item">
            <div className="view">
                <img className="d-block w-100" src={props.imageUrl} alt="img" />
                <div className="mask rgba-black-strong"></div>
            </div>
        </div>
    );
}

export default carouselItem;