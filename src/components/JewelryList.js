import React from 'react';
import { rings } from '../data';
import JewelryProduct from './JewelryProduct';

export default function JewelryList() {
    return (
        <div className="jewelry-list-container">
            <div className="rings-container">
                <h1>Rings</h1>
                <div className="rings-row">
                    {rings.map(ring => {
                        return (
                            <JewelryProduct key={ring.id} {...ring} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
