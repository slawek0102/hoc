import React from 'react';
import stylesWrapper from './../HOC/stylesWrapper';

const ButtonWithStyles = (props) => {

    return (
        <div>
            <button >{props}</button>

        </div>
    )
};

export default stylesWrapper(ButtonWithStyles);