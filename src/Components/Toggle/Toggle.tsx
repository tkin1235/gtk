import React from 'react';
import './Toggle.scss'

export const Toggle = () => {
    return (
        <label className="toggle">
            <input type={"checkbox"} className="toggle__input"/>
            <span className="toggle__slider"></span>
        </label>
    );
}