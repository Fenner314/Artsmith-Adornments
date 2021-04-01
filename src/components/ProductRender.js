import React, { useState } from 'react';
import { products } from '../data';
import JewelryProduct from './JewelryProduct';
import SlideControls from './SlideControls';

export default function ProductRender(props) {
    const children = props.children;
    const renderedProducts = products.filter(product =>
        product.category.includes(children)
    )

    return (
        <React.Fragment>
            {renderedProducts.map(product => {
                return (
                    <JewelryProduct key={product.id} {...product} product={product} />
                )
            })}
            <SlideControls />
        </React.Fragment>
    )
}
