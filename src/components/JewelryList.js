import React from 'react';
import { ProductContext } from '../App';
import { products } from '../data';
import Carousel from './Carousel';
import ProductRender from './ProductRender';

export default function JewelryList(props) {
    const renderedProducts = products.filter(product =>
        product.category.includes(props.category)
    )
console.log(renderedProducts)
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    }
    return (
        <div className="jewelry-list-container">
            <Carousel title={'Rings'} category={'rings'} />
            <Carousel title={'Necklaces'} category={'necklace'} />
            <Carousel title={'Earrings'} category={'earring'} />
            <Carousel title={'Bracelets'} category={'bracelet'} />
        </div>
    )
}
