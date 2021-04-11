import React, { useContext } from 'react';
import { ProductContext } from '../../App';

export default function CartItem({ item, cart }) {
    const {id, name, img, price, total, count} = item;
    const { increment, decrement, removeItem } = useContext(ProductContext)
    
    return (
        <div className="row my-4 text-center">
            <div className="col-10 my-1 mx-auto col-lg-2">
                <img 
                src={img} 
                style={{width: '7rem'}} 
                className="img-fluid" 
                alt="product" />
            </div>
            <div className="col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <span className="d-lg-none">Item:&nbsp;</span>
                {name}
            </div>
            <div className="col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <span className="d-lg-none">Price:&nbsp;</span>
                ${price}
            </div>
            <div className="col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center">
                    <div className="quantity-ctrl">
                        <button 
                            className="quantity-btn" 
                            disabled={count === 1 ? true : false}
                            onClick={() => decrement(id)}>
                            -
                        </button>
                        <span className="quantity-text" id="">{count}</span>
                        <button 
                            className="quantity-btn" 
                            onClick={() => increment(id)}>
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash fa-lg" />
                </div>
            </div>
            <div className="col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <strong>Item Total: ${total}</strong>
            </div>
        </div>
    )
}
