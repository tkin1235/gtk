import React from 'react';
import './Logos.scss';

interface OverviewProps {
    logos?: Array<SVGElement>
}

export const Logos = ({logos: logos}: OverviewProps): JSX.Element => {
    return (
        <div className="logos">
            {logos && logos.map((logo) => {
                return (
                    <div className={"logos__logo"}>
                        {logo}
                    </div>
                )
            })}
        </div>
    );
}