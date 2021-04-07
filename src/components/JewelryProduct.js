import React, { useContext } from 'react'
import { ProductContext } from '../App'

export default function JewelryProduct(props) {
    const {
        id,
        name,
        img,
        price,
        description,
        inCart,
        count,
        total,
    } = props.product

    const { handleDetailsToggle, handleDetail, addToCart } = useContext(ProductContext)

    return (
        <div className="card-container">
            <div className="product-card" onClick={() => handleDetail(id)}>
                <div className="product-card-image" onClick={handleDetailsToggle}>
                    <div className="overlay"></div>
                    <img src={img} alt="product" />
                </div>
                <div className="product-card-desc" onClick={handleDetailsToggle}>
                    <span>{name}</span>
                    <span>Price: ${price}</span>
                </div>
                <button className="cart-btn" disabled={inCart ? true : false} onClick={() => inCart ? console.log('no') : addToCart(id)}>
                    <span className={inCart ? "cart-btn-bg cart-btn-bg-active" : "cart-btn-bg"}></span>
                    <span className={inCart ? "cart-btn-text cart-btn-text-active" : "cart-btn-text"}>{inCart ? "Added To Cart" : "Add To Cart"}</span>
                </button>
            </div>
        </div>
    )
}
