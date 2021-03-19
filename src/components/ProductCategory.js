import React from 'react';

export default function ProductCategory(props) {
    const {
        id, 
        name,
        img,
    } = props

    return (
        <div>
            <div className="category-card">
                <div className="category-card-image">
                    <div className="overlay"></div>
                    <img src={img} width="250px" alt="product" />
                </div>
                <div className="category-card-desc">
                    <span>{name}</span>
                </div>
            </div>
        </div>
    )
}
