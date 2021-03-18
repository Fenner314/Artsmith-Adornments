import React from 'react'

export default function ProductCategory(props) {
    const {
        id, 
        name,
        img,
        price
    } = props

    return (
        <div>
            <a href="#" className="category-card">
                <div className="category-card-image">
                    <img src={img} width="250px" alt="product" />
                </div>
                <div className="category-card-desc">
                    <span>{name}</span>
                    <span>{price}</span>
                    <span>{id}</span>
                </div>
            </a>
        </div>
    )
}
