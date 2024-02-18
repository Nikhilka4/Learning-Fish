import React from 'react';
import './NavBar.css';
import Button from './GetInTouch'

const NavBar = () => {
  return (
    <>
        <nav>
            <div className="logo">
                <h1>Learing <span className="fish">Fish</span></h1>
            </div>
            <Button margin="0 100px" />
        </nav>
    </>
  )
}

export default NavBar;