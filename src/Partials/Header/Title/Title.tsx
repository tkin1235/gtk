import React from 'react';
import './Title.scss';
import {StyleNode} from "../../../Components/ThemeNodes/StyleNode";

export const Title = (): JSX.Element => {

    return (
        <StyleNode BEMClass="title">
            <StyleNode BEMClass={"title__heading"}>Dedicated to the merging of user experience and business functionality</StyleNode>
        </StyleNode>
    );
}