import React, { useState } from 'react';
import { rings } from '../data';
import JewelryProduct from './JewelryProduct';


export default function RingTest() {
    const length = useState(rings.length)

    return (
        <React.Fragment>
            {rings.map(ring => {
                return (
                    <JewelryProduct key={ring.id} {...ring} />
                )
            })}
        </React.Fragment>
    )
}
