import React, { useState, useContext, useRef } from 'react';
import { ProductContext } from '../../App';
import { Link } from 'react-router-dom';
import Button from '../Button';

export default function ForgotPassword() {
    const { 
        handleLogin,
        resetPassword
    } = useContext(ProductContext);

    const emailRef = useRef();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        // e.preventDefault()

        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for instructions')
        } catch {
            setError('Failed to reset password');
        }

        setLoading(false);
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h3 className="auth-header">Password Reset</h3>
                <p className={error ? "error-message" : ""}>{error}</p>
                <p className={message ? "reset-message" : ""}>{message}</p>
                <div className="auth-form">
                    <div className="auth-form-group">
                        <label htmlFor="email">Email</label>
                        <input autoFocus type="email" name="email" ref={emailRef} />
                        <span className="auth-underline"></span>
                    </div>
                </div>
                <div className="auth-footer">
                    <Button
                        text={'Reset Password'}
                        height={'36px'}
                        maxWidth={'100%'}
                        fontSize={'1rem'}
                        border={'1px solid var(--mainYellow)'}
                        onClick={() => handleSubmit()}
                        disabled={loading}
                    />
                    <p>Don't have an account? &nbsp;
                        <Link to="/register">
                            <span className="login-link">Register</span>
                        </Link>
                    </p>
                    <Link to="/login">
                        <p className="login-link forgot-pass">Login</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
