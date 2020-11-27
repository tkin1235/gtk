import React from 'react';
import {DarkThemeName, LightThemeName, useTheme} from "../../Contexts/ThemeContext";

// I would like to import the text-node styles, however we need to be careful with webpack and node-sass, putting in App.tsx for now, but @todo find a better way to dedupe scss imports so we can import them in a module basis

export const StyleNode = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>): JSX.Element => {
    const theme = useTheme();

    const isTextNode = typeof props.children === 'string';

    if(props.className === 'toggle'){
        debugger;
    }
    console.log(props.className);
    const themeClassNames = props.className + ' ' + props.className + '--' + theme?.theme + ' ' + (isTextNode ? (props.className + '--text') : '');

    return (
        <div {...props} className={themeClassNames}>
            {!isTextNode && props.children}
            {isTextNode &&
            <div className={themeClassNames}>
                <div className={
                    (`text-node`) + (theme?.theme === LightThemeName ? '--active ' : (` text-node `)) +
                    (`text-node--${LightThemeName}`)
                }>
                    {props.children}
                </div>
                <div className={
                    (`text-node `) + (`text-node`) + (theme?.theme === DarkThemeName ? '--active ' :  (` text-node `)) +
                    (`text-node--${DarkThemeName}`)
                }>
                    {props.children}
                </div>
            </div>
            }
        </div>
    );
}