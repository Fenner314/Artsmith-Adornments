import React, { useContext } from 'react';
import { ProductContext } from '../App';
import { ProductConsumer } from '../context';
import { productDetails } from '../data';

export default function Details(props) {
    const { detailsOpen, handleDetailsToggle } = useContext(ProductContext)

    return (
        <>
            <div className={detailsOpen ? "details-container" : "invisible"}>
                <div className="details-title-row">
                    <h1>Title</h1>
                    {/* <span className="menu-close-modal" >&times;</span> */}
                    <i class="fas fa-times fa-2x menu-close" onClick={handleDetailsToggle}></i>
                </div>
                <div className="details-info-row">
                    <div className="details-info-row-img">
                        <img src="img/bracelet1.jpg" width="100px" alt="product" />
                    </div>
                    <div className="details-info-row-info">
                        <h3>Title</h3>
                        <h5>Price</h5>
                        <p>Availability</p>
                        <p>Descrition</p>
                        <p>Size</p>
                        {/* <div className="details-info-row-info-cart">
                            <span>Quantity</span>
                            <button className="details-btn">
                                <span className="details-btn-bg"></span>
                                <p className="details-btn-text">Add To Cart</p>
                            </button>
                        </div> */}
                        <div className="details-info-row-info-cart">
                            <p>Quantity</p>
                            <div className="details-btn">
                                <span className="details-btn-bg"></span>
                                <span className="details-btn-text">Add To Cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={detailsOpen ? "details-overlay-active" : ""} onClick={handleDetailsToggle}></div>
        </>
    )
}
