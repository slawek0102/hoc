import React from 'react';


export default (WrappedComponent) => {
    return (args) => {
        return WrappedComponent(translateProps(args));
    }
};


const translateProps = (args) => {
    if (args.imie === 'Slawek') {
        return (styles.myColor)
    } else {
        return null
    }
};


const styles = {
    myColor: {
        backgroundColor: 'green',
        color: 'red',
        padding: '20px'
    }
}