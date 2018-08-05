import React from 'react';
import stylesWrapper from '../HOC/stylesWrapper'

const ButtonWithStyles = (props) => {

const {...style} = props;

    return (
        <div >
            <button style={style}>Slawek</button>
        </div>
    )
};

export default stylesWrapper(ButtonWithStyles);