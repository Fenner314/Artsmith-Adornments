import React, { useContext } from 'react';
import { ProductContext } from '../../App';
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import EmptyCart from './EmptyCart';

export default function Cart(props) { 
    const { cart } = useContext(ProductContext);
    
    if (cart.length > 0) {
        return (
            <div className="cart-container">
                <Title name='Your Cart' />
                <CartColumns />
                <CartList cart={cart}/>
                <CartTotals cart={cart} history={props.history} />
            </div>
        )
    } 
    return (
        <div className="cart-container">
            <EmptyCart />
        </div>
    )
}
