import React from 'react';
import './Main.scss';
import {StyleNode} from "../ThemeNodes/StyleNode";
import {Header} from "../../Partials/Header/Header";
import {Overview} from "../../Partials/Overview/Overview";
import {Logos} from "../../Partials/Logos/Logos";
import {Experience} from "../../Partials/Experience/Experience";
import {ThemeProvider} from "../../Contexts/ThemeContext";

interface MainProps {
}

export const Main = ({}: MainProps): JSX.Element => {
    return (
        <StyleNode className={`main`}>
            <Header/>
            <Overview/>
            <Logos/>
            <Experience/>
        </StyleNode>
    );
};