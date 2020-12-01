import React from 'react';
import './App.scss';
import {ThemeProvider} from "./Contexts/ThemeContext";
import {Main} from "./Components/Main/Main";

const App = (): JSX.Element => {
    return (
        <div className={`App`}>
            <ThemeProvider>
                <Main />
            </ThemeProvider>
        </div>
    );
}

export default App;
