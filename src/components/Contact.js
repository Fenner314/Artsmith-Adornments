import React from 'react';
import fullLogo from '../fullLogo.svg';
import Copyright from './Copyright';

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-grid">
                <div className="contact-grid-left">
                    <h5>Information</h5>
                    <div></div>
                    <p>Privacy Policy</p>
                    <p>Refund Policy</p>
                    <p>Sizing Chart</p>
                </div>
                <div className="contact-grid-middle">
                    <h5>Contact Me</h5>
                    <div></div>
                    <p>Aberdeen, SD 57401</p>
                    <p>(605) 380-3352</p>
                </div>
                <div className="contact-grid-right">
                    <div></div>
                    <div className="contact-grid-form">
                        <div className="contact-form-box">
                            <input className="contact-form-input" type="text" placeholder="Name" name="name" aria-label="name" />
                            <span className="underline"></span>
                        </div>
                        <div className="contact-form-box">
                            <input className="contact-form-input" type="text" placeholder="Email Address" name="email address" aria-label="email address" />
                            <span className="underline"></span>
                        </div>
                        <div className="contact-form-box">
                            <input className="contact-form-input" type="text" placeholder="Subject" name="subject" aria-label="subject" />
                            <span className="underline"></span>
                        </div>
                        <div className="contact-form-box" id="message">
                            <textarea className="contact-form-input" id="message" placeholder="Message" name="message" aria-label="message" />
                            <span className="underline"></span>
                        </div>
                        {/* <button className="send" type="submit" value="Send" >Send</button> */}
                        <div className="send">
                            <span className="bg"></span>
                            <span className="border"></span>
                            <span className="text">Send</span>
                        </div>
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

