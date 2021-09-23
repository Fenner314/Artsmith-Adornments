import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../App';
import Button from './Button';
import { db } from './login/Firebase';

export default function UpdateAccount(props) {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const quoteRef = useRef();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { user, updateName, updateEmail, updatePassword } = useContext(ProductContext);

    const test = (quote) => {
        return db.collection('users').doc(user.uid).set({
            favQuote: quote
        })
    }

    const handleSubmit = (e) => {
        // e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        setLoading(true);
        setError('');

        if (nameRef.current.value !== user.displayName) {
            promises.push(updateName(nameRef.current.value))
        }
        if (emailRef.current.value !== user.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }
        // if (quoteRef.current.value) {
        //     promises.push(test(quoteRef.current.value))
        // }


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
        <div className="auth-container"> 
            {/* <i class="fas fa-times fa-2x menu-close" onClick={() => props.setUpdateOpen()}></i> */}
            <h3 className="auth-header">Update Account</h3>
            <p className={message ? "reset-message" : ""}>{message}</p>
            <p className={error ? "error-message" : ""}>{error}</p>
            {/* <p className={error ? "error-message" : ""}>{error}</p> */}
            <form className="auth-form" 
                // onSubmit={() => handleSubmit}
            >
                <div className="auth-form-group">
                    <label htmlFor="name">Name</label>
                    <input autoFocus type="text" name="name" ref={nameRef} defaultValue={user && user.displayName} />
                    <span className="auth-underline"></span>
                </div>
                <div className="auth-form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" ref={emailRef} defaultValue={user && user.email} />
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
                {/* <div className="auth-form-group">
                    <label htmlFor="confirm-password">Favorite Quote</label>
                    <input type="text" name="quote" ref={quoteRef} />
                    <span className="auth-underline"></span>
                </div> */}
            </form>
                <div className="auth-footer">
                    {/* <button type="submit" className="register-btn">Register</button> */}
                    <div className="update-button" >
                        <Button
                            text={'Update'}
                            height={'36px'}
                            maxWidth={'100%'}
                            fontSize={'1rem'}
                            border={'1px solid var(--mainYellow)'}
                            onClick={() => handleSubmit()}
                        />
                        <Link to="/account" style={{textDecoration: 'none'}}>
                            <p className="update-cancel">Cancel</p>
                        </Link>
                    </div>
                </div>
        </div>
    </div>
   )
}
