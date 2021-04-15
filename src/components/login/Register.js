import React, { useState, useContext, useRef } from 'react';
import { ProductContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';
import Button from '../Button';

export default function Register(props) {
    const { handleRegister } = useContext(ProductContext);

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    async function handleSubmit(e) {
        // e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('');
            setLoading(true);
            await handleRegister(emailRef.current.value, passwordRef.current.value);
            history.push('/account');
        } catch {
            setError('Failed to create account');
        }

        setLoading(false);
    }

    const showPass = () => {
        if (passwordRef.current.type === 'password') {
            passwordRef.current.type = 'text'
        } else {
            passwordRef.current.type = 'password'
        }
    }
    const showConfirmPass = () => {
        if (passwordConfirmRef.current.type === 'password') {
            passwordConfirmRef.current.type = 'text'
        } else {
            passwordConfirmRef.current.type = 'password'
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-container"> 
                <h3 className="auth-header">Register</h3>
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
                    <div className="auth-form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm-password" ref={passwordConfirmRef} />
                        <i class="far fa-eye" onClick={() => showConfirmPass()}></i>
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
                        onClick={() => handleSubmit()}
                        disabled={loading}
                    />
                    <p>Already have an account? &nbsp;
                        <Link to="/login">
                            <span className="login-link">Log In</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
