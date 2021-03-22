import React from 'react';
import ProductCategory from './ProductCategory';
import { categories } from '../data';

export default function ProductCategories() {
    return (
        <div className="product-categories-container">
            <h1>My Products</h1>
            <div className="product-categories-row">
                {categories.map(category => {
                    return (
                        <ProductCategory key={category.id} {...category} />
                    )
                })}
            </div>
        </div>
    )
}
