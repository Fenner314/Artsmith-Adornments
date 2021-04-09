import React from 'react'

export default function Button(props) {
    let styles = {
        maxWidth: props.maxWidth,
        height: props.height,
        fontSize: props.fontSize,
        lineHeight: props.height
    }
    return (
        <button className="button-container" style={styles}>
            <div className="inner-button-container">
                <span className="button-container-bg"></span>
                <span className="button-container-base"></span>
                <span className="button-container-text">{props.text}</span>
            </div>
        </button>
    )
}
