import React from "react";
import './button.css'

function Button (props) {
    return (
        <button>{props.text}</button>
    )
}

export default Button;

export function ButtonChild (props) {
    return (
        <button onClick={props.onTouch}>
            {props.children}
        </button>
    )
}