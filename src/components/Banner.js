import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import person1 from '../../public/img/person1.jpg';

export default function Banner() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 6500,
    }

    return (
        <Slider {...settings}>
            <div className="banner banner1">
                <div className="banner-text banner-text-left">
                    <h1 className="margin-2">Beautifully Crafted</h1>
                    <p className="margin-2">Designer quality, handmade jewelry</p>
                </div>
            </div>
            <div className="banner banner2">
                <div className="banner-text banner-text-left">
                    <h1 className="margin-2">Custom Made</h1>
                    <p className="margin-2">Unique styles, attention drawing</p>
                </div>
            </div>
            <div className="banner banner3">
                <div className="banner-text banner-text-right">
                    <h1 className="margin-2 mb-0">Thoughtfully</h1>
                    <h1 className="margin-2 mt-0">Designed</h1>
                    <p className="margin-2">With you in mind</p>
                </div>
            </div>
        </Slider>
    )
}
