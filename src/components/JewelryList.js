import React, { useContext } from 'react';
import { ProductContext } from '../App';
import Carousel from './Carousel';
import ProductRender from './ProductRender';

export default function JewelryList(props) {
    const { testLength, setTestLength, handleLength } = useContext(ProductContext);

    return (
        <div className="jewelry-list-container">
            <Carousel title={'Rings'} category={'rings'} handleLength={handleLength} length={testLength} />
            <Carousel title={'Necklaces'} category={'necklace'} />
            <Carousel title={'Earrings'} category={'earring'} />
            <Carousel title={'Bracelets'} category={'bracelet'} />
            {/* <Carousel>
                CHILDREN BETWEEN PRODUCTRENDERS ARE CATEGORY OF DESIRED PRODUCT
                <ProductRender title={'Rings'} handleLength={handleLength} length={testLength}>rings</ProductRender>
            </Carousel>
            <Carousel>
                <ProductRender title={'Necklaces'}>necklace</ProductRender>
            </Carousel>
            <Carousel>
                <ProductRender title={'Earrings'}>earring</ProductRender>
            </Carousel>
            <Carousel>
                <ProductRender title={'Bracelets'}>bracelet</ProductRender>
            </Carousel> */}
        </div>
    )
}
