import React from 'react';


export default (WrappedComponent) => {
    return (args) => {
        return WrappedComponent(translateProps(args));
    }
};


const translateProps = (args) => {
    if (args.imie === 'Slawek') {
        return (styles.slawek)
    } else {
        return (styles.marek)
    }
};


const styles = {
    slawek: {
        backgroundColor: 'green',
        color: 'red',
        padding: '20px'
    },
    marek: {
        backgroundColor: 'yellow',
        color: 'red',
        padding: '20px'
    }
};