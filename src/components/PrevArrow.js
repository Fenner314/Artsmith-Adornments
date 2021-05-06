import React from 'react'

export default function PrevArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{ ...style, color: 'red'}}
            onClick={onclick} 
        />
    )
}
