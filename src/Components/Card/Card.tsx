import React from 'react';
import './Card.scss';
import {StyleNode} from "../ThemeNodes/StyleNode";

interface CardProps {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    title: string,
    copy: string
}
export const Card = ({icon: Icon, title: title, copy: copy}: CardProps): JSX.Element => {
    return (
        <StyleNode BEMClass="card">
            <StyleNode BEMClass="card__icon">
                <Icon className={"card__icon__svg"} />
            </StyleNode>
            <div className="card__content-wrap">
                <StyleNode BEMClass="card__title">{title}</StyleNode>
                <StyleNode BEMClass="card__copy">{copy}</StyleNode>
            </div>
        </StyleNode>
    );
};