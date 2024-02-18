import React from 'react';
import './Hero.css';
import image from '../assets/Learning-fish.png';
import Button from './GetInTouch';

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="text">
                    <p className='first'>Welcome to</p>
                    <p className='first'>Learning Fish</p>
                    <p className='second'>Dive into Knowledge and Explore the</p>
                    <p className='second'>Depth of Learning</p>
                    <Button margin="25px 0" />
                </div>
                <div className="fish-img">
                    <img src={image} alt="A learning fish" />
                </div>
            </div>
        </>
    )
}

export default Hero;