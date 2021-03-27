import React from 'react'

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

    return (
        <div className="product-card">
            <div className="product-card-image">
                <div className="overlay"></div>
                <img src={img} alt="product" />
            </div>
            <div className="product-card-desc">
                <span>{name}</span>
                <span>Price: ${price}</span>
            </div>
        </div>
    )
}
