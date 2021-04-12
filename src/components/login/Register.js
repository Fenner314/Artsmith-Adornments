import React from 'react';
import Button from '../Button';

export default function Register(props) {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h3 className="auth-header">Register</h3>
                <div className="auth-form">
                    <div className="auth-form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="" />
                        <span className="auth-underline"></span>
                    </div>
                    <div className="auth-form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="" />
                        <span className="auth-underline"></span>
                    </div>
                    <div className="auth-form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="text" name="confirm-password" placeholder="" />
                        <span className="auth-underline"></span>
                    </div>
                </div>
                <div className="auth-footer">
                    {/* <button type="submit" className="register-btn">Register</button> */}
                    <Button
                        text={'Register'}
                        height={'36px'}
                        maxWidth={'100%'}
                        fontSize={'1rem'}
                        border={'1px solid var(--mainYellow)'}
                        onClick={() => console.log('register')}
                    />
                    <p>Already have an account? <span className="auth-switch" onClick={() => props.handleHasAccount()}>Log In</span></p>
                </div>
            </div>
        </div>
    )
}
