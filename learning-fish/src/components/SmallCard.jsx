import React from 'react';
import './SmallCard.css';
import rectangle from '../assets/rect.png';
import circle from '../assets/circle.png';

const SmallCard = ({ title, text, image }) => {
    const imgSrc = image === 'rectangle' ? rectangle : circle;

    return (
        <>
            <div className="small-card">
                <div className="header">
                    <img src={imgSrc} alt={image} />
                    <h3>{title}</h3>
                </div>
                <p>{text}</p>
            </div>
        </>
    )
}

export default SmallCard;
