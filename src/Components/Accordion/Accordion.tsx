import React from 'react';
import './Accordion.scss';

interface AccordionProps {
    icon?: string,
    title: string,
    copy: string
}

export const Accordion = ({icon: icon, title: title, copy: copy}: AccordionProps): JSX.Element => {
    return (
        <div className="card">
            <div className="cart__icon">{icon}</div>
            <div className="card__title">{title}</div>
            <div className="card__copy">{copy}</div>
        </div>
    );
};