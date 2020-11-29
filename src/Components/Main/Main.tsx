import React from 'react';
import './Main.scss';
import {StyleNode} from "../ThemeNodes/StyleNode";
import {Header} from "../../Partials/Header/Header";
import {Overview} from "../../Partials/Overview/Overview";
import {Logos} from "../../Partials/Logos/Logos";
import {Experience} from "../../Partials/Experience/Experience";
import {Footer} from "../../Partials/Footer/Footer";

// images
import * as Aws from "../../Images/aws.svg"
import * as css from "../../Images/css3.svg"
import * as github from "../../Images/github.svg"
import * as html from "../../Images/html5.svg"
import * as mysql from "../../Images/mysql.svg"
import * as node from "../../Images/nodejs.svg"
import * as php from "../../Images/php.svg"
import * as react from "../../Images/react.svg"
import * as ts from "../../Images/typescript.svg"
import * as webpack from "../../Images/webpack.svg"

interface MainProps {
}

export const Main = ({}: MainProps): JSX.Element => {
    return (
        <StyleNode BEMClass={`main`}>
            <Header/>
            <Overview/>

            <Logos
                logos={[
                    ts.default as unknown as React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
                    react.default as unknown as React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
                    php.default as unknown as React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
                    mysql.default as unknown as React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
                    webpack.default as unknown as React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
                    html.default as unknown as React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
                    css.default as unknown as React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
                    Aws.default as unknown as React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
                    node.default as unknown as React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
                    github.default as unknown as React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
                ]}/>
            <Experience/>
            <Footer />
        </StyleNode>
    );
};