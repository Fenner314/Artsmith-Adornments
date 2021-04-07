import React from 'react'

export default function CartColumns() {
    return (
        <div className="cart-columns-container container-fluid text-center d-none d-lg-block">
            <div className="cart-columns-row row">
                <div className="cart-columns-item container-fluid text-center d-none d-lg-block">
                    <p>Image</p>
                </div>
                <div className="cart-columns-item container-fluid text-center d-none d-lg-block">
                    <p>Product</p>
                </div>
                <div className="cart-columns-item container-fluid text-center d-none d-lg-block">
                    <p>Price</p>
                </div>
                <div className="cart-columns-item container-fluid text-center d-none d-lg-block">
                    <p>Quantity</p>
                </div>
                <div className="cart-columns-item container-fluid text-center d-none d-lg-block">
                    <p>Remove</p>
                </div>
                <div className="cart-columns-item container-fluid text-center d-none d-lg-block">
                    <p>Total</p>
                </div>
            </div>
        </div>
    )
}
