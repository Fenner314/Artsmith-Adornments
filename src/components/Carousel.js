import React, { useState, useEffect } from 'react';
import SlideControls from './SlideControls';
import { products } from '../data';
import ProductRender from './ProductRender';


export default function Carousel(props) {
    const { title, category } = props
    
    const renderedProducts = products.filter(product =>
        product.category.includes(category)
    )

    const [slides, setSlides] = useState(renderedProducts);
    const [transform, setTransform] = useState(0);
    const [length, setLength] = useState(renderedProducts.length);
    const [stop, setStop] = useState((length - 5) * 292);

    const threeProducts = window.matchMedia('(max-width: 1260)');
    const twoProducts = window.matchMedia('(max-width: 935px)');
    const oneProduct = window.matchMedia('(max-width: 615px)');

    useEffect(() => {
        if (threeProducts) {
            setStop((length - 4) * 292)
        } else if (twoProducts) {
            setStop(length + 2 * 292)
        } else if (oneProduct) {
            setStop(length + 3 * 292)
        }
    })
    

    const handleRightArrowClick = () => {
        setTransform(transform + 292)
      } 
    
      const handleLeftArrowClick = () => {
          setTransform(transform - 292)
          console.log(transform)
      }     

      return (
        <div className="carousel-container">
            <h1>{title}</h1>
            <div className="carousel">
                <div 
                    className="slider" 
                    style={{transform: `translateX(-${transform}px)`}}
                >
                   <ProductRender title={title} category={category} renderedProducts={renderedProducts} />
                </div>
            <SlideControls transform={transform} stop={stop} handleRightArrowClick={handleRightArrowClick} handleLeftArrowClick={handleLeftArrowClick} />
            </div>
        </div>
    )
}
