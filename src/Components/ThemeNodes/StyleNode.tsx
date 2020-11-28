import React from 'react';
import {DarkThemeName, LightThemeName, useTheme} from "../../Contexts/ThemeContext";

// I would like to import the text-node styles, however we need to be careful with webpack and node-sass, putting in App.tsx for now, but @todo find a better way to dedupe scss imports so we can import them in a module basis

/**
 * Is it a terrible idea to turn most dom nodes into react nodes?
 *
 * We will see...
 * @param props
 * @constructor
 */
export const StyleNode = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>): JSX.Element => {
    const theme = useTheme();
    const isTextNode = typeof props.children === 'string';

    const themeClassNames =
        // Passed in class name, e.g. `.element`
        props.className + ' ' +

        // Passed in class name with theme modifier, e.g. `.element--light`
        props.className + '--' + theme?.theme + ' ' +

        // If the node is a text-node, give it --text modifier, e.g. `.element--text`
        (isTextNode ? (props.className + '--text') : '');

    /**
     * This is a "break" in BEM convention to include a namespace of an element above the block, however this is a requirement of the child that the parent is relatively positioned
     * So I'm using this as a solution until I decide if this is better/worse then inlining the style.
     * @param isTextNode
     */
    const getTextNodeParentClassNames = (isTextNode: boolean): string => {
        return isTextNode ? 'text-node__parent' : '';
    }

    /**
     * So what is going on with this render function?
     * In order to support style-switching feature, I'm using two monospace fonts, and duplicating all text DOM nodes, one for each font.
     * The reason of doing this (instead of changing the font style of the same DOM nodes), is to get around the limitations around animating font changes,
     * so instead we toggle the opacity of each node, and absolutely position one of the nodes (arbitrarily?).
     * This requires setting a relative position on the parent of the text node, or you'll see some differences in word-wrapping when the absolutely positioned text is displayed (causing jumps in content).
     */
    return (
        <div {...props} className={themeClassNames}>
            {!isTextNode && props.children}
            {isTextNode &&
            <div className={themeClassNames + ' ' + getTextNodeParentClassNames(isTextNode)}>
                <div className={
                    (`text-node`) + (theme?.theme === LightThemeName ? '--active ' : (` text-node `)) +
                    (`text-node--${LightThemeName}`)
                }>
                    {props.children}
                </div>
                <div className={
                    (`text-node `) + (`text-node`) + (theme?.theme === DarkThemeName ? '--active ' : (` text-node `)) +
                    (`text-node--${DarkThemeName}`)
                }>
                    {props.children}
                </div>
            </div>
            }
        </div>
    );
}