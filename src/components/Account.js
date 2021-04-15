import React, { useState, useContext } from 'react';
import { ProductContext } from '../App';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import UpdateAccount from '../components/UpdateAccount';

export default function Account() {
    const [error, setError] = useState('');
    const [updateOpen, setUpdateOpen] = useState(false);
    const { user, logout } = useContext(ProductContext);
    const history = useHistory();

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
                <h2>Hello, {user && user.email}</h2>
                <Button
                    text={'Update Profile'}
                    height={'36px'}
                    maxWidth={'160px'}
                    fontSize={'1rem'}
                    border={'1px solid var(--mainYellow)'}
                    borderRadius={'30px'}
                    onClick={() => setUpdateOpen(true)}
                />
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
            <div className={updateOpen ? "update-container" : "invisible"}>
                <UpdateAccount setUpdateOpen={setUpdateOpen} />
            </div>
            <div className={updateOpen ? "details-overlay-active" : ""} onClick={() => setUpdateOpen(false)}></div>
        </>
    )
}
