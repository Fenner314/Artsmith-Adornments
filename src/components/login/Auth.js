import React, { useState, useContext } from 'react';
import { ProductContext } from '../../App';
import Login from './Login';
import Register from './Register';
import Account from '../../components/Account'

export default function Auth() {
    const { user } = useContext(ProductContext)

    const [hasAccount, setHasAccount] = useState(true);

    const handleHasAccount = () => {
        hasAccount ? setHasAccount(false) : setHasAccount(true);
        console.log('yes');
    }

    return (
        <>
            <div className="authenticate-container">
                {hasAccount ? <Login handleHasAccount={handleHasAccount} /> : <Register handleHasAccount={handleHasAccount} />}
            </div>
        </>
        // <>
        //     {user ? (
        //         <Account />
        //     ) : (
        //         <div className="authenticate-container">
        //             {hasAccount ? <Login handleHasAccount={handleHasAccount} /> : <Register handleHasAccount={handleHasAccount} />}
        //         </div>
        //     )}
        // </>
    )
}
