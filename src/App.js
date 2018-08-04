import React, {Component} from 'react';
import './App.css';
import './components/ButtonOne';
import ButtonWithStyles from './components/ButtonOne';

class App extends Component {
    render() {
        return (
            <div className="App">

                <ButtonWithStyles
                    imie='slawek'
                    disable
                />

            </div>
        );
    }
}

export default App;
