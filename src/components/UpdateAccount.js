import React, { useState, useContext, useRef } from 'react';
import { ProductContext } from '../App';
import Button from './Button';

export default function UpdateAccount(props) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { user, updateEmail, updatePassword } = useContext(ProductContext);

    const handleSubmit = (e) => {
        // e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        setLoading(true);
        setError('');

        if (emailRef.current.value !== user.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value !== user.email) {
            promises.push(updatePassword(passwordRef.current.value))
        }


        Promise.all(promises)
        .then(() => {
            setError('');
            setMessage('Account successfully updated')
        }).catch(() => {
            setMessage('');
            setError('Failed to update');
        }).finally(() => {
            setLoading(false);
        })
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
        <div className="update-container"> 
            <i class="fas fa-times fa-2x menu-close" onClick={() => props.setUpdateOpen()}></i>
            <h3 className="auth-header">Update Account</h3>
            <p className={message ? "reset-message" : ""}>{message}</p>
            <p className={error ? "error-message" : ""}>{error}</p>
            {/* <p className={error ? "error-message" : ""}>{error}</p> */}
            <div className="auth-form">
                <div className="auth-form-group">
                    <label htmlFor="email">Email</label>
                    <input autoFocus type="email" name="email" ref={emailRef} defaultValue={user.email} />
                    <span className="auth-underline"></span>
                </div>
                <div className="auth-form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" ref={passwordRef} placeholder="Leave blank to maintain current password" />
                    <i class="far fa-eye" onClick={() => showPass()}></i>
                    <span className="auth-underline"></span>
                </div>
                <div className="auth-form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name="confirm-password" ref={passwordConfirmRef} placeholder="Leave blank to maintain current password" />
                    <i class="far fa-eye" onClick={() => showConfirmPass()}></i>
                    <span className="auth-underline"></span>
                </div>
            </div>
            <div className="auth-footer">
                {/* <button type="submit" className="register-btn">Register</button> */}
                <div className="update-button">
                    <Button
                        text={'Update'}
                        height={'36px'}
                        maxWidth={'100%'}
                        fontSize={'1rem'}
                        border={'1px solid var(--mainYellow)'}
                        onClick={() => handleSubmit()}
                    />
                    <p className="update-cancel" onClick={() => props.setUpdateOpen()}>Cancel</p>
                </div>
            </div>
        </div>
    </div>
   )
}
