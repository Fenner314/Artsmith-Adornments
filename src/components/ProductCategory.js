import React from 'react';

export default function ProductCategory(props) {
    const {
        name,
        img,
    } = props

    return (
        <div>
            <div className="product-card">
                <div className="product-card-image">
                    <div className="overlay"></div>
                    <img src={img} width="250px" alt="product" />
                </div>
                <div className="product-card-desc">
                    <span>{name}</span>
                </div>
            </div>
        </div>
    )
}
