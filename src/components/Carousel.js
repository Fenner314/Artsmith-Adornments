import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import JewelryProduct from './JewelryProduct';
import SlideControls from './SlideControls';
import ProductRender from './ProductRender';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import { products } from '../data';


export default function Carousel(props) {
    const { title, category } = props
    
    const renderedProducts = products.filter(product =>
        product.category.includes(category)
    )

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: false,
        responsive: [
            {
                breakpoint: 1282,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 976,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 665,
                settings: {
                    slidesToShow: 1,
                    swipeToSlide: true,
                    arrows: false,
                }
            }
        ]
    }

      return (
          <div className="carousel-container">
            <h1>{title}</h1>
            <Slider {...settings}>
                {renderedProducts.map(product => {
                    return (
                        <div><JewelryProduct key={product.id} {...product} product={product} /></div>
                    )
                })}
            </Slider>
          </div>
        // <div className="carousel-container">
        //     <h1>{title}</h1>
        //     <div className="carousel">
        //         <div 
        //             className="slider" 
        //             style={{transform: `translateX(-${transform}px)`}}
        //         >
        //            <ProductRender title={title} category={category} renderedProducts={renderedProducts} />
        //         </div>
        //     <SlideControls transform={transform} stop={stop} handleRightArrowClick={handleRightArrowClick} handleLeftArrowClick={handleLeftArrowClick} />
        //     </div>
        // </div>
    )
}
