import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCategory from './ProductCategory';
import { categories } from '../data';

export default function ProductCategories() {
    const settings = {
        infinite: false,
        dots: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 0
    }

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
