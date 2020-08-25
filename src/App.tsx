import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Overview} from "./Partials/Overview/Overview";
import {Header} from "./Partials/Header/Header";
import {Logos} from "./Partials/Logos/Logos";

function App() {
    return (
        <div className="App">
            <Header/>
            <Overview/>
            <Logos />
        </div>
    );
}

export default App;
