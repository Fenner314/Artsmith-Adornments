import React from 'react';
import Carousel from './Carousel';

export default function OtherProjectsList() {
    return (
        <div className="other-container">
            <h5>Feel free to browse, purchase, or inquire about any of the other projects I've been working on</h5>
            <div className="jewelry-list-container">
                <Carousel title={'Other Projects'} category={'other'}/>
            </div>
        </div>
    )
}
