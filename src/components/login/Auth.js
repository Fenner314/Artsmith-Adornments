import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

export default function Auth() {
    const [hasAccount, setHasAccount] = useState(true);

    const handleHasAccount = () => {
        hasAccount ? setHasAccount(false) : setHasAccount(true);
        console.log('yes');
    }

    return (
        <div className="authenticate-container">
            {hasAccount ? <Login handleHasAccount={handleHasAccount} /> : <Register handleHasAccount={handleHasAccount} />}
        </div>
    )
}
