import React from 'react';
import './Header.scss';
import {Title} from "./Title/Title";
import {Top} from "./Top/Top";
import {StyleNode} from "../../Components/ThemeNodes/StyleNode";

export const Header = (): JSX.Element => {
    return (
        <StyleNode className="header">
            <Top/>
            <Title/>
        </StyleNode>
    );
}