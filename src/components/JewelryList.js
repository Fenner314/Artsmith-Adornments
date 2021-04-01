import React from 'react';
import Carousel from './Carousel';
import ProductRender from './ProductRender';

export default function JewelryList(props) {
    return (
        <div className="jewelry-list-container">
            <Carousel>
                {/* CHILDREN BETWEEN PRODUCTRENDERS ARE CATEGORY OF DESIRED PRODUCT */}
                <ProductRender title={'Rings'} setLength={props.setLength}>rings</ProductRender>
            </Carousel>
            <Carousel>
                <ProductRender title={'Necklaces'} setLength={props.setLength}>necklace</ProductRender>
            </Carousel>
            <Carousel>
                <ProductRender title={'Earrings'} setLength={props.setLength}>earring</ProductRender>
            </Carousel>
            <Carousel>
                <ProductRender title={'Bracelets'} setLength={props.setLength}>bracelet</ProductRender>
            </Carousel>
        </div>
    )
}
