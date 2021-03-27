import React, { useState, useRef } from 'react';
import { rings } from '../data';
import JewelryProduct from './JewelryProduct';
import SlideControls from './SlideControls';

export default function Rings(props) {
    const LEFT = "left";
    const RIGHT = "right";

    const [transform, setTransform] = useState(0);
    const productCard = useRef();
    const [slides, setSlides] = useState(
        rings.map(ring => {
            return (
                <JewelryProduct key={ring.id} {...ring} />
            )
        })
    );
    const [sliderStyle, setSliderStyle] = useState({});
    const [carouselStyle, setCarouselStyle] = useState({});
    const [direction, setDirection] = useState(RIGHT);

    const nextClicked = () => {
        if (direction === LEFT) {
            moveSlide();
        }
        setDirection(RIGHT);

        setCarouselStyle({
            justifyContent: `flex-start`
        });

        setSliderStyle({
            transform: `translateX(-25.95%)`
        });
    };

    const prevClicked = () => {
        if (direction === RIGHT) {
            moveSlide();
        }
        setDirection(LEFT);

        setCarouselStyle({
            justifyContent: `flex-end`
        });

        setSliderStyle({
            transform: `translate(25.95%)`
        });
    };

    const moveSlide = () => {
        if (direction === RIGHT) {
            const firstSlide = slides.shift();
            setSlides([...slides, firstSlide]);
        } else {
            const lastSlide = slides.pop();
            setSlides([lastSlide, ...slides]);
        }

        setSliderStyle({
            transition: 'none',
            transform: 'translate(0)'
        });
    };

    const handleRightClick = () => {
        setTransform(transform - 25.95);
    }

    const handleLeftClick = () => {
        setTransform(transform + 25.95);
    }

    const handleAddSlideToEnd = () => {
        // productCard.appendChild(productCard.firstElementChild);
        console.log(productCard.children)
    }

    return (
        <div className="rings-container">
                <h1>Rings</h1>
                <div className="rings-slider">
                    <div 
                        className="slides"
                        style={{transform: `translateX(${transform}%)`}}
                        ref={productCard}
                        onTransitionEnd={handleAddSlideToEnd}
                    >
                        {slides}
                    </div>
                    <SlideControls handleRightClick={handleRightClick} handleLeftClick={handleLeftClick} />
                </div>
        </div>
            
    )
}
