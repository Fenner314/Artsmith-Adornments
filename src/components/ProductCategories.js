import React from 'react';
import ProductCategory from './ProductCategory';
import { categories } from '../App';

export default function ProductCategories() {
    return (
        <div>
            {categories.map(category => {
                return (
                    <ProductCategory key={category.id} {...category} />
                )
            })}
        </div>
    )
}
