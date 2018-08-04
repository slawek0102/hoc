import React from 'react';
import stylesWrapper from './../HOC/stylesWrapper';

const ButtonWithStyles = (props) => {
    console.log(props)
    return (
        <button style={props.styles}>I am ButtonOne</button>
    )
};

export default stylesWrapper(ButtonWithStyles);