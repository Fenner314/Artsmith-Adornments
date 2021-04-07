import React, { useContext } from 'react';
import { ProductContext } from '../App';

export default function Details(props) {
    const { detailsOpen, handleDetailsToggle, addToCart } = useContext(ProductContext)
    
    const {
        id, 
        name,
        img,
        price,
        available,
        description,
        size,
        inCart,
        count,
        total,
    } = props.detailProduct

    return (
        <>
            <div className={detailsOpen ? "details-container" : "invisible"}>
                <div className="details-title-row">
                    <h1>{name}</h1>
                    {/* <span className="menu-close-modal" >&times;</span> */}
                    <i class="fas fa-times fa-2x menu-close" onClick={handleDetailsToggle}></i>
                </div>
                <div className="details-info-row">
                    <div className="details-info-row-img">
                        <img src={img} width="100px" alt="product" />
                    </div>
                    <div className="details-info-row-info">
                        <h3>Item Name: {name}</h3>
                        <h5>Price: ${price}</h5>
                        <p>{available ? 'Available' : 'Sold-out'}</p>
                        <p>Description: {description}</p>
                        <p>Size: {size}</p>
                        {/* <div className="details-info-row-info-cart">
                            <span>Quantity</span>
                            <button className="details-btn">
                                <span className="details-btn-bg"></span>
                                <p className="details-btn-text">Add To Cart</p>
                            </button>
                        </div> */}
                        <div className="details-info-row-info-cart">
                            <p>Quantity</p>
                            <div className={inCart ? "details-btn-inactive details-btn" :"details-btn"} onClick={() => {inCart ? addToCart() : addToCart(id)}}>
                                <span className={inCart ? "details-btn-bg-active details-btn-bg" : "details-btn-bg"}></span>
                                <span className={inCart ? "details-btn-text-active details-btn-text" : "details-btn-text"}>{inCart ? 'Added To Cart' : 'Add To Cart'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={detailsOpen ? "details-overlay-active" : ""} onClick={handleDetailsToggle}></div>
        </>
    )
}
