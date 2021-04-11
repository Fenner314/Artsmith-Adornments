import React from 'react';

export default function Button(props) {
    const containerStyles = {
        maxWidth: props.maxWidth,
        height: props.height,
        fontSize: props.fontSize,
        lineHeight: props.height,
    }

    const innerContainerStyles = {
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,
    }

    const buttonStyles = {
        border: props.border,
        borderRadius: props.borderRadius,
    }

    const activeStyle = {
        width: '120%',
    }
    
    return (
        <button className="button-container" style={containerStyles} disabled={props.disabled} onClick={props.onClick}>
            <div className="inner-button-container" style={innerContainerStyles}>
                <span className="button-container-bg" style={props.disabled ? activeStyle : null}></span>
                <span className="button-container-base" style={buttonStyles}></span>
                <span className="button-container-text" style={props.disabled ? {color: 'var(--mainWhite)'} : null}>{props.text}</span>
            </div>
        </button>
        // <button className="button-container" style={containerStyles} disabled={props.disabled} onClick={props.onClick}>
        //     <div className="inner-button-container" style={{borderRadius: props.borderRadius, backgroundColor: props.backgroundColor}}>
        //         <span className="button-container-bg"></span>
        //         <span className="button-container-base" style={{border: props.border, borderRadius: props.borderRadius}}></span>
        //         <span className="button-container-text">{props.text}</span>
        //     </div>
        // </button>
    )
}
