import React, { Component } from 'react';

import Header from './components/Header';
import MainContentContainer from './components/MainContentContainer';
import MessageForm from './components/MessageForm';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <MainContentContainer>
                    <MessageForm />
                </MainContentContainer>
            </div>
        );
    }
}

export default App;
