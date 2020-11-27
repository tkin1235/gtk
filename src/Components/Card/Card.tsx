import React from 'react';
import './Card.scss';
import {StyleNode} from "../ThemeNodes/StyleNode";

interface CardProps {
    icon?: string,
    title: string,
    copy: string
}

export const Card = ({icon: icon, title: title, copy: copy}: CardProps): JSX.Element => {
    return (
        <StyleNode className="card">
            <StyleNode className="card__icon">{icon}</StyleNode>
            <StyleNode className="card__title">{title}</StyleNode>
            <StyleNode className="card__copy">{copy}</StyleNode>
        </StyleNode>
    );
};