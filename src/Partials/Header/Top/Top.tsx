import React from 'react';
import './Top.scss';
import {Toggle} from "../../../Components/Toggle/Toggle";

export const Top = () => {

    return (
        <div className="top">
            <div className="top__logo">Galen Kistler</div>
            <div className="top__toggle"><Toggle /></div>
        </div>
    );
}