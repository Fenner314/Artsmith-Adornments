import React, { useContext } from 'react';
import {ProductContext} from '../../App';

export default function CartTotals() {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = useContext(ProductContext)

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
                    <button 
                        className="btn btn-outline-danger text-uppercase mb-3 px-5"
                        type="button"
                        onClick={() => clearCart()}>
                        Clear Cart
                    </button>
                    <h5>
                        <span className="text-title">
                            Subtotal:&nbsp;
                        </span>
                        <strong>${cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            Tax:&nbsp;
                        </span>
                        <strong>${cartTax}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            Total:&nbsp;
                        </span>
                        <strong>${cartTotal}</strong>
                    </h5>
                </div>
            </div>
        </div>
    )
}
