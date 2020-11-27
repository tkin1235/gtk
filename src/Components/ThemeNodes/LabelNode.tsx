import React from 'react';
import {ThemeProvider, useTheme} from "../../Contexts/ThemeContext";

export const LabelNode = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLabelElement>, HTMLLabelElement>) => {
    const context = useTheme();
    const themeClassNames = props.className + ' ' +  props.className + '--' + context?.theme;

    return (
        <label {...props} className={themeClassNames}>
            {props.children}
        </label>
    );
}