import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../App';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import UpdateAccount from '../components/UpdateAccount';
import db from './login/Firebase';

export default function Account() {
    const [error, setError] = useState('');
    const [updateOpen, setUpdateOpen] = useState(false);
    const { user, logout } = useContext(ProductContext);
    const history = useHistory();

    let name, email;

    if (user != null) {
        name = user.displayName;
        email = user.email;
    }

    const handleLogout = async () => {
        setError('');

        try {
            await logout();
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <>
            <div className="account-container">
                <h2 className="account-greeting">Hello, {user && name}</h2>
                {/* <h2>{user && user.name}</h2> */}
                <Link to="/update_account">
                    <div style={{width: '160px'}}>
                        <Button
                            text={'Update Profile'}
                            height={'36px'}
                            maxWidth={'160px'}
                            fontSize={'1rem'}
                            border={'1px solid var(--mainYellow)'}
                            borderRadius={'30px'}
                            onClick={() => setUpdateOpen(true)}
                        />
                    </div>
                </Link>
                <div className="account-logout-button">
                        <Button
                            text={'Log Out'}
                            height={'36px'}
                            maxWidth={'100px'}
                            fontSize={'1rem'}
                            border={'1px solid var(--mainYellow)'}
                            borderRadius={'30px'}
                            onClick={() => handleLogout()}
                        />
                </div>
            </div>
            {/* <div className={updateOpen ? "" : "invisible"}>
                <UpdateAccount setUpdateOpen={setUpdateOpen} />
            </div>
            <div className={updateOpen ? "details-overlay-active" : ""} onClick={() => setUpdateOpen(false)}></div> */}
        </>
    )
}
