import React from 'react';
import fullLogo from '../fullLogo.svg';
import Copyright from './Copyright';

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-grid">
                <div className="contact-grid-left">
                    <img src={fullLogo} width="250px" alt="store" style={{marginTop: '-4.5rem', marginBottom: '-4.5rem'}}/>
                    <p>Privacy Policy</p>
                    <p>Refund Policy</p>
                    <p>Sizing Chart</p>
                </div>
                <div className="contact-grid-middle">
                    <h1>Contact Us</h1>
                    <p>Aberdeen, SD 57401</p>
                    <p>(605) 380-3352</p>
                </div>
                <div className="contact-grid-right">
                    <div></div>
                    <div className="contact-grid-form">
                        <input className="contact-form-input" type="text" placeholder="Name" name="name" aria-label="name" />
                        <input className="contact-form-input" type="text" placeholder="Email Address" name="email address" aria-label="email address" />
                        <input className="contact-form-input" type="text" placeholder="Subject" name="subject" aria-label="subject" />
                        <textarea className="contact-form-input" id="message" placeholder="Message" name="message" aria-label="message" />
                    </div>
                </div>
            </div>
            <div className="newsletter">
                <h5>Sign up for newsletter</h5>
                <input id="newsletter" type="email" placeholder="email@example.com" name="email" aria-label="email@example.com" autoCorrect="off" />
                <button>Subscribe</button>
            </div>
            <Copyright /> 
        </div>
    )
}
