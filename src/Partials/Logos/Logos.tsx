import React from 'react';
import './Logos.scss';
import {StyleNode} from "../../Components/ThemeNodes/StyleNode";

interface OverviewProps {
    logos?: Array<SVGElement>
}

export const Logos = ({logos: logos}: OverviewProps): JSX.Element => {
    return (
        <StyleNode className="logos">
            {logos && logos.map((logo) => {
                return (
                    <StyleNode className={"logos__logo"}>
                        {logo}
                    </StyleNode>
                )
            })}
        </StyleNode>
    );
}