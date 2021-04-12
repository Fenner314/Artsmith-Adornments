import React, { useContext } from 'react';
import { ProductContext } from '../App';
import Button from './Button';

export default function Details(props) {
    const { detailsOpen, handleDetailsToggle, addToCart, qtyIncrement, qtyDecrement } = useContext(ProductContext)
    
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
                            <p>Quantity:</p>
                            <div className="quantity-ctrl">
                                <button 
                                    className="quantity-btn" 
                                    disabled={count <= 1 || inCart ? true : false}
                                    onClick={() => qtyDecrement(id)}>
                                    -
                                </button>
                                <span className="quantity-text" id="">{count}</span>
                                <button 
                                    className="quantity-btn" 
                                    disabled={inCart ? true : false}
                                    onClick={() => qtyIncrement(id)}>
                                    +
                                </button>
                            </div>
                            <div className="details-btn">
                                <Button
                                    text={inCart ? 'Added To Cart' : 'Add To Cart'}
                                    height={'46px'}
                                    maxWidth={'150px'}
                                    fontSize={'1rem'}
                                    border={'1px solid var(--mainYellow)'}
                                    borderRadius={'30px'}
                                    disabled={inCart ? true : false}
                                    onClick={() => addToCart(id)}
                                />
                            </div>
                            {/* <div className={inCart ? "details-btn-inactive details-btn" :"details-btn"} onClick={() => {inCart ? console.log('') : addToCart(id)}}>
                                <span className={inCart ? "details-btn-bg-active details-btn-bg" : "details-btn-bg"}></span>
                                <span className={inCart ? "details-btn-text-active details-btn-text" : "details-btn-text"}>{inCart ? 'Added To Cart' : 'Add To Cart'}</span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={detailsOpen ? "details-overlay-active" : ""} onClick={handleDetailsToggle}></div>
        </>
    )
}
