import React from 'react';
import stylesWrapper from './../HOC/stylesWrapper';

const ButtonWithStyles = (props) => {

const {...myColor} = props;

console.log(props)

    return (
        <div >
            <button style={myColor}>Slawek</button>
        </div>
    )
};

export default stylesWrapper(ButtonWithStyles);