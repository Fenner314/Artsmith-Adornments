import React from 'react';
import Button from './Button';

export default function EngravingRepair() {
    return (
        <div className="engraving-container">
            <h3>I do engraving and repairs on any jewelry!</h3>
            <p>Fill out the form below and I will be in touch with you about your service</p>
            <form className="engraving-form-container">
                <div className="engraving-form-group">
                    <label>Name</label>
                    <input />
                    <span className="auth-underline"></span>
                </div>
                <div className="engraving-form-group">
                    <label>Email</label>
                    <input />
                    <span className="auth-underline"></span>
                </div>
                <div className="engraving-form-group">
                    <label>Service</label>
                    <select>
                        <option value="Engraving">Engraving</option>
                        <option value="repair">Repair</option>
                        <option value="resize">Resize</option>
                    </select>
                    <span className="auth-underline b-0"></span>
                </div>
                <div className="engraving-form-group">
                    <label>Details</label>
                    <textarea />
                <span className="auth-underline b-0"></span>
                </div>
                <div className="engraving-form-group">
                    <label>Please include a picture</label>
                    <input id="file" type="file" />
                    <span className="auth-underline"></span>
                </div>
                <div>
                    <Button
                        text={'Submit'}
                        height={'36px'}
                        maxWidth={'100%'}
                        fontSize={'1rem'}
                        border={'1px solid var(--mainYellow)'}
                    />
                </div>
            </form>
        </div>
    )
}
