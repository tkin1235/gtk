import React from 'react';
import './Overview.scss';
import {Card} from "../../Components/Card/Card";
import {StyleNode} from "../../Components/ThemeNodes/StyleNode";

// Images
import * as Universal from '../../Images/universal.svg';
import * as Intuitive from '../../Images/intuitive.svg';
import * as Collaborative from '../../Images/collaborative.svg';
import * as Maintainable from '../../Images/maintainable.svg';

export const Overview = (): JSX.Element => {
    return (
        <StyleNode className="overview">
            <Card icon={Universal.default as unknown as React.FunctionComponent<React.SVGProps<SVGSVGElement>>} title={"Universal"} copy={"Web applications should be accessible to everyone."}/>
            <Card icon={Intuitive.default as unknown as React.FunctionComponent<React.SVGProps<SVGSVGElement>>} title={"Intuitive"} copy={"I love to build applications that users enjoy."}/>
            <Card icon={Collaborative.default as unknown as React.FunctionComponent<React.SVGProps<SVGSVGElement>>} title={"Collaborative"} copy={"Design, product, and development teams don’t work in a bubble"}/>
            <Card icon={Maintainable.default as unknown as React.FunctionComponent<React.SVGProps<SVGSVGElement>>} title={"Maintainable"}
                  copy={"Fixing bugs isn’t such a chore if the code makes sense and is well tested."}/>
        </StyleNode>
    );
}