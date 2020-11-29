import React from 'react';
import './Top.scss';
import {Toggle} from "../../../Components/Toggle/Toggle";
import {StyleNode} from "../../../Components/ThemeNodes/StyleNode";

export const Top = (): JSX.Element => {
    return (
        <StyleNode BEMClass="top">
            <StyleNode BEMClass="top__logo">Galen Kistler</StyleNode>
            <StyleNode BEMClass="top__toggle"><Toggle /></StyleNode>
        </StyleNode>
    );
}