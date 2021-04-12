import React from 'react';
import Button from '../Button';

export default function Login(props) {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h3 className="auth-header">Log In</h3>
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
                </div>
                <div className="auth-footer">
                    {/* <button type="submit" className="login-btn">Log In</button> */}
                    <Button
                        text={'Log In'}
                        height={'36px'}
                        maxWidth={'100%'}
                        fontSize={'1rem'}
                        border={'1px solid var(--mainYellow)'}
                        onClick={() => console.log('log in')}
                    />
                    <p>Don't have an account? <span className="auth-switch" onClick={() => props.handleHasAccount()}>Register</span></p>
                </div>
            </div>
        </div>
    )
}
