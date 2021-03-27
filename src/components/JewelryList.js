import React from 'react';
import Carousel from './Carousel';
import RingTest from './RingTest';
import { rings } from '../data';
import JewelryProduct from './JewelryProduct';

export default function JewelryList(props) {
    return (
        <div className="jewelry-list-container">
            <Carousel>
                <RingTest title={'Rings'} setLength={props.setLength} />
            </Carousel>
        </div>
    )
}
