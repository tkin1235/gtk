import React from 'react';
import './Accordion.scss';
import {StyleNode} from "../ThemeNodes/StyleNode";

interface AccordionProps {
    items: Array<string>
    company: string,
    location: string
    title: string,
    date: string
}

export const Accordion = ({items: items, company: company, location: location, title: title, date: date}: AccordionProps): JSX.Element => {
    return (
        <StyleNode className="accordion">
            <div className={"accordion__title"}>
                <StyleNode className={"accordion__title__company"}>
                    {company + ','}
                </StyleNode>
                <StyleNode className={"accordion__title__location"}>
                    {location + ' — '}
                </StyleNode>
                <StyleNode className={"accordion__title__title"}>
                    {title}
                </StyleNode>
            </div>
            <StyleNode className={"accordion__date"}>{date}</StyleNode>
            <StyleNode className={"accordion__items"}>
                {items.map((item: string, index) => {
                    return (
                        <StyleNode key={index} className={"accordion__item"}>
                            {item}
                        </StyleNode>
                    );
                })}
            </StyleNode>
        </StyleNode>
    );
};