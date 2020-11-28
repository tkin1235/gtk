import React from 'react';
import './Logos.scss';
import {StyleNode} from "../../Components/ThemeNodes/StyleNode";

interface OverviewProps {
    logos?: Array<React.FunctionComponent<React.SVGProps<SVGSVGElement>>>
}

export const Logos = ({logos: logos}: OverviewProps): JSX.Element => {
    return (
        <StyleNode className="logos">
            {logos && logos.map((Logo) => {
                return (
                    <StyleNode className={"logos__logo"}>
                        <Logo className={"logos__logo__svg"} />
                    </StyleNode>
                )
            })}
        </StyleNode>
    );
}