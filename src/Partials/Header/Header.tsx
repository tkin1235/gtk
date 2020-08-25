import React from 'react';
import './Header.scss';
import {Title} from "./Title/Title";
import {Top} from "./Top/Top";

export const Header = () => {
    return (
        <div className="header">
           <Title />
           <Top />
        </div>
    );
}