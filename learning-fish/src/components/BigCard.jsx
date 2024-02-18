import React from 'react';
import './BigCard.css';
import iphone from '../assets/iphone.png';
import circle from '../assets/ninja.png';

const BigCard = () => {
    return (
        <>
            <div className="big-card">
                <img src={iphone} alt="iphone" />
                <div className="big-card-text">
                    <img src={circle} alt="iphone" />
                    <h3>Goal Setting</h3>
                </div>
            </div>
        </>
    )
}

export default BigCard