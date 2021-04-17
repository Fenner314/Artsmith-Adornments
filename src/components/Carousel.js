import React, { useState } from 'react';
import SlideControls from './SlideControls';

export default function Carousel(props) {
    const [slides, setSlides] = useState(props.children);
    const [transform, setTransform] = useState(0);
    // const [length, setLength] = useState();

    const handleRightArrowClick = () => {
        setTransform(transform + 292)
        console.log(transform)
      } 
    
      const handleLeftArrowClick = () => {
          setTransform(transform - 292)
      }     

      console.log(props.children.props.length)
      return (
        <div className="carousel-container">
            <h1>{props.children.props.title}</h1>
            <div className="carousel">
                <div 
                    className="slider" 
                    style={{transform: `translateX(-${transform}px)`}}
                >
                    {slides}
                </div>
            <SlideControls transform={transform} handleRightArrowClick={handleRightArrowClick} handleLeftArrowClick={handleLeftArrowClick} />
            </div>
        </div>
    )
}
