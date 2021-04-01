import React, { useState } from 'react';

export default function Carousel(props) {
    const [slides, setSlides] = useState(props.children);
    const [transform, setTransform] = useState(0);

    const handleRightClick = () => {
        setTransform(transform + 25.85)
    } 

    const handleLeftClick = () => {
        setTransform(transform - 25.85)
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
        </div>
    )
}
