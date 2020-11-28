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
        <StyleNode className="card">
            <StyleNode className="card__icon">
                <Icon className={"card__icon__svg"} />
            </StyleNode>
            <StyleNode className="card__title">{title}</StyleNode>
            <StyleNode className="card__copy">{copy}</StyleNode>
        </StyleNode>
    );
};