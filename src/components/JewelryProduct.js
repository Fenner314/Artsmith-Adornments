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
        total
    } = props

    const { handleDetailsToggle, handleDetail } = useContext(ProductContext)

    return (
        <div className="card-container">
            <div className="product-card">
                <div className="product-card-image" onClick={handleDetailsToggle}>
                    <div className="overlay"></div>
                    <img src={img} alt="product" />
                </div>
                <div className="product-card-desc" onClick={handleDetailsToggle}>
                    <span>{name}</span>
                    <span>Price: ${price}</span>
                </div>
                <div className="cart-btn" onClick={() => console.log('Added to cart')}>
                    <span className="cart-btn-bg"></span>
                    <span className="cart-btn-text">{inCart ? "Added To Cart" : "Add To Cart"}</span>
                </div>
            </div>
        </div>
    )
}
