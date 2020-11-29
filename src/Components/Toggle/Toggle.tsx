import React from 'react';
import './Toggle.scss'
import {LabelNode} from "../ThemeNodes/LabelNode";
import {StyleNode} from "../ThemeNodes/StyleNode";
import {DarkThemeName, LightThemeName, useTheme} from "../../Contexts/ThemeContext";

// This toggle element will flip the theme context value between light and dark values.
export const Toggle = (): JSX.Element => {

    // "!" will tell the TypeScript compiler that its return value won't be undefined
    const {theme, setTheme} = useTheme()!;

    // Set theme value on input value change
    const onChange = () => {
        setTheme(theme === LightThemeName ? DarkThemeName : LightThemeName);
    }

    return (
        <LabelNode className="toggle">
            <input onChange={() => {
                onChange()
            }} type={"checkbox"} className="toggle__input"/>
            <StyleNode BEMClass="toggle__slider"/>
        </LabelNode>
    );
}