import React, { useState, useEffect } from 'react';
import { detailProduct } from '../../../commerce-site/src/data';
import { products, productDetails } from './data';


export default function ProductProvider() {
    const [state, setState] = useState({  
        products: products, 
        detailProduct: productDetails,
        cart: [],
        modalOpen: false,
        modalProduct: productDetails,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    })

    const getItem = (id) => {
        const product = state.products.find(item => item.id === id);
        console.log(product);
        return product;
      }

    const handleDetail = (id) => {
        const product = getItem(id);
        setState({
            ...state, 
            detailProduct: product
        })
    }
    
    return (
        <div>
            
        </div>
    )
}
