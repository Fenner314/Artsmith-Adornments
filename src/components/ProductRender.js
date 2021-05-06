import React from 'react';
import JewelryProduct from './JewelryProduct';

export default function ProductRender(props) {
    const {renderedProducts} = props;
    // const renderedProducts = products.filter(product =>
    //     product.category.includes(children)
    // )

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
