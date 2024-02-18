import React from 'react'
import './FootText.css';
import Button from './GetInTouch';

const FootText = () => {
  return (
    <>
        <div className="footText">
            <h3>Start Your Learning Adventure Today! </h3>
            <p>Join Learning Fish for Personalized Learning </p>
            <p>Experiences Tailored to Your Success.</p>
            <Button margin="25px auto" />
        </div>
    </>
  )
}

export default FootText;