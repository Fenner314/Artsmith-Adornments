import React, { useContext } from 'react';
import { ProductContext } from '../App';
import Button from './Button';

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

    const { handleDetailsToggle, handleDetail, addToCart, addTotals } = useContext(ProductContext)

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
                <div className="cart-btn" >
                    <Button 
                        text={inCart ? 'Added To Cart' : 'Add To Cart'} 
                        height={'40px'} 
                        maxWidth={'150px'} 
                        fontSize={'1rem'} 
                        borderRadius={'30px'} 
                        backgroundColor={'var(--mainWhite)'} 
                        disabled={inCart ? true : false}
                        onClick={() => addToCart(id)}
                    />
                </div>
                {/* <button 
                    className="cart-btn" 
                    disabled={inCart ? true : false} 
                    onClick={() => {
                        addToCart(id);
                        addTotals();
                }}>
                    <span className={inCart ? "cart-btn-bg cart-btn-bg-active" : "cart-btn-bg"}></span>
                    <span className={inCart ? "cart-btn-text cart-btn-text-active" : "cart-btn-text"}>{inCart ? "Added To Cart" : "Add To Cart"}</span>
                </button> */}
                {/* <button className="cart-btn" disabled={inCart ? true : false} onClick={() => inCart ? console.log('no') : addToCart(id)}>
                    <span className={inCart ? "cart-btn-bg cart-btn-bg-active" : "cart-btn-bg"}></span>
                    <span className={inCart ? "cart-btn-text cart-btn-text-active" : "cart-btn-text"}>{inCart ? "Added To Cart" : "Add To Cart"}</span>
                </button> */}
            </div>
        </div>
    )
}
