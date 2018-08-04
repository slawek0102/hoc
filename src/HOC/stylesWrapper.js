import React from 'react';


export default (WrappedComponent) => {
    return (args) => {
        return WrappedComponent(translateProps(args));
    }
};


const translateProps = (args) => {

    console.log('Argumenty',args)

    return (args.imie + " i "+ args.nazwisko)

};
