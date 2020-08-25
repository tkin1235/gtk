import React from 'react';
import './Card.scss';

interface CardProps {
    icon?: string,
    title: string,
    copy: string
}

export const Card = ({icon: icon, title: title, copy: copy}: CardProps): JSX.Element => {
    return (
        <div className="card">
            <div className="cart__icon">{icon}</div>
            <div className="card__title">{title}</div>
            <div className="card__copy">{copy}</div>
        </div>
    );
};