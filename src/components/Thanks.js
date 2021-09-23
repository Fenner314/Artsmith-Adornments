import React from 'react';
import { Link } from 'react-router-dom';

export default function Thanks() {
    return (
        <div className="confirm-container">
            <div className="confirm-card">
                <div className="header">
                    <h1>Thank you!</h1>
                </div>
                <div className="body">
                    <span>Your message was successfully sent. I'll get back to you soon.</span>
                    <Link to="/">
                        <a id="back-link" href="dev.html">Back to home</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
