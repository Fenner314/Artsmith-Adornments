import React, { useState } from 'react';
import { ringsLength } from '../data';
import SlideControls from './SlideControls';

export default function Carousel(props) {
    const [slides, setSlides] = useState(props.children);
    const [transform, setTransform] = useState(0);
    const [length, setLength] = useState(ringsLength);

    const handleRightClick = () => {
        setTransform(transform + 25.85)
        console.log(transform)
        handleEnd();
        console.log(handleEnd())
    } 

    const handleLeftClick = () => {
        setTransform(transform - 25.85)
    } 

    const handleEnd = () => {
        if (transform > ringsLength * 25.85 - 25.85 * 6) {
            return true;
        }
        return false
    }

    return (
        <div className="carousel-container">
            <h1>{props.children.props.title}</h1>
            <div className="carousel">
                <div 
                    className="slider" 
                    style={{transform: `translateX(-${transform}%)`}}
                >
                    {slides}
                </div>
            </div>
            <SlideControls handleRightClick={handleRightClick} handleLeftClick={handleLeftClick} handleEnd={handleEnd} />
        </div>
    )
}
