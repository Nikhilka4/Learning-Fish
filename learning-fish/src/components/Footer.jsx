import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <>
        <footer>
            <div className="footerLogo">
                <h1>Learning <span className="Fish">Fish</span></h1>
            </div>
            <div className="first">
                <ul>
                    <li className="firstLi">First column</li>
                    <li>First page</li>
                    <li>Second page</li>
                    <li>Third</li>
                    <li>Fourth</li>
                </ul>
            </div>
            <div className="first">
                <ul>
                    <li className="firstLi">First column</li>
                    <li>First page</li>
                    <li>Second page</li>
                    <li>Third</li>
                    <li>Fourth</li>
                </ul>
            </div>
            <div className="first">
                <ul>
                    <li className="firstLi">First column</li>
                    <li>First page</li>
                    <li>Second page</li>
                    <li>Third</li>
                    <li>Fourth</li>
                </ul>
            </div>
            <div className="contact">
                <h3>Subscribe</h3>
                <input type="text" placeholder='Enter your message' />
            </div>
        </footer>
    </>
  )
}

export default Footer;