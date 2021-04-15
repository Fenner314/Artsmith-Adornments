import React, { useState, useContext, useRef } from 'react';
import { ProductContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';
import Button from '../Button';

export default function Login(props) {
    const { 
        handleLogin,
        setIsLoggedIn
    } = useContext(ProductContext);

    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const showPass = () => {
        if (passwordRef.current.type === 'password') {
            passwordRef.current.type = 'text'
        } else {
            passwordRef.current.type = 'password'
        }
    }

    async function handleSubmit(e) {
        // e.preventDefault()

        try {
            setError('');
            setLoading(true);
            await handleLogin(emailRef.current.value, passwordRef.current.value);
            history.push('/account');
        } catch {
            setError('Failed to log in');
        }

        setLoading(false);
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h3 className="auth-header">Log In</h3>
                <p className={error ? "error-message" : ""}>{error}</p>
                <div className="auth-form">
                    <div className="auth-form-group">
                        <label htmlFor="email">Email</label>
                        <input autoFocus type="email" name="email" ref={emailRef} />
                        <span className="auth-underline"></span>
                    </div>
                    <div className="auth-form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" ref={passwordRef} />
                        <i class="far fa-eye" onClick={() => showPass()}></i>
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
                        onClick={() => handleSubmit()}
                        disabled={loading}
                    />
                    <p>Don't have an account? &nbsp;
                        <Link to="/register">
                            <span className="login-link">Register</span>
                        </Link>
                    </p>
                    <Link to="/forgot-password">
                        <p className="login-link forgot-pass">Forgot Password?</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
