import React from 'react';
import fullLogo from '../fullLogo.svg';
import Copyright from './Copyright';

export default function Contact() {
    return (
        <div>
            <div className="contact-grid">
                <div className="contact-grid-left">
                    <img src={fullLogo} width="250px" alt="store" />
                    <p>Privacy Policy</p>
                    <p>Refund Policy</p>
                    <p>Sizing Chart</p>
                </div>
                <div className="contact-grid-middle">
                    <h1>Contact Us</h1>
                    <p>Aberdeen, SD 57401</p>
                    <p>(605) 380-3352</p>
                </div>
                <div className="contact-grid-right_form">
                    <input type="text" placeholder="Name" name="name" aria-label="name" />
                </div>
            </div>
            <div className="newsletter">
                <h3>Sign up for newsletter</h3>
                <input id="newsletter" type="email" placeholder="email@example.com" name="email" aria-label="email@example.com" autoCorrect="off" />
            </div>
            <Copyright /> 
        </div>
    )
}
