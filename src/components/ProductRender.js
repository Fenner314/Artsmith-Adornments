import React, { useEffect, useContext } from 'react';
import { ProductContext } from '../App';
import { products } from '../data';
import JewelryProduct from './JewelryProduct';

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
        </React.Fragment>
    )
}
