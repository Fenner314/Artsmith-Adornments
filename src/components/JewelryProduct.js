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
            <div className="product-card-img-container">
                <img src={img} width="250px" alt="product" />
            </div>
            <div className="product-card-text">
                <span>{name}</span>
                <span>{price}</span>
            </div>
        </div>
    )
}
