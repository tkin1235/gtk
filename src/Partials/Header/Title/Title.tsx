import React from 'react';
import './Title.scss';
import {StyleNode} from "../../../Components/ThemeNodes/StyleNode";

export const Title = (): JSX.Element => {

    return (
        <StyleNode className="title">
            <StyleNode className={"title__heading"}>Dedicated to the merging of user experience and business functionality</StyleNode>
        </StyleNode>
    );
}