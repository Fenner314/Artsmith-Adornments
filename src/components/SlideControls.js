import React from 'react'

export default function SlideControls(props) {
    const {
        handleRightClick,
        handleLeftClick,
        handleEnd,
    } = props

    return (
        <div className="slide-controls">
            <button id="prev-btn" onClick={handleLeftClick}>
                <i class="fas fa-chevron-left" />
            </button>
            <button id="next-btn" onClick={handleRightClick}>
                <i class="fas fa-chevron-right" />
            </button>
        </div>
    )
}
