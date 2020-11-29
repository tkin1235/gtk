import './Footer.scss';
import React from "react";

import * as Github from "../../Images/github.svg"
import * as Linkedin from "../../Images/linkedin.svg"
import {StyleNode} from "../../Components/ThemeNodes/StyleNode";

export const Footer = () => {
    return (
        <StyleNode BEMClass={"footer"}>
            <a className={"footer__icon"} target={"_blank"} href={"https://github.com/tkin1235/gtk"}>
                <Github.default/>
            </a>

            <a className={"footer__icon"} target={"_blank"} href={"https://www.linkedin.com/in/galen-kistler-454ba364/"}>
                <Linkedin.default/>
            </a>
        </StyleNode>
    )
}