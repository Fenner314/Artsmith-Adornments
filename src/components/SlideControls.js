import React from 'react';

export default function SlideControls(props) {
    const {
        transform,
        stop,
        handleRightArrowClick,
        handleLeftArrowClick,
    } = props

    return (
        <div className="slide-controls">
            <button id={transform <= 0 ? "invisible" : "prev-btn"} onClick={handleLeftArrowClick}>
                <i class="fas fa-chevron-left" />
            </button>
            <button id={transform > stop ? "invisible" : "next-btn"} onClick={handleRightArrowClick}>
                <i class="fas fa-chevron-right" />
            </button>
        </div>
    )
}
