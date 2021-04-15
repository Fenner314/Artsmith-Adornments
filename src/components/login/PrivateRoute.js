import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ProductContext } from '../../App';

export default function PrivateRoute({ component: Component, ...rest}) {
    const { user } = useContext(ProductContext);

    return (
        <Route
            {...rest}
            render={props => {
                return user ? <Component {...props} /> : <Redirect to="/login" />
            }}
        >

        </Route>
    )
}
