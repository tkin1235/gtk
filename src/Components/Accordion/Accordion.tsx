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
        <StyleNode BEMClass="accordion">
            <div className={"accordion__title"}>
                <StyleNode BEMClass={"accordion__title__company"}>
                    {company}
                </StyleNode>
                {/*<StyleNode BEMClass={"accordion__title__location"}>*/}
                {/*    {location + ' — '}*/}
                {/*</StyleNode>*/}
                <StyleNode BEMClass={"accordion__title__title"}>
                    {title}
                </StyleNode>
            </div>
            <StyleNode BEMClass={"accordion__date"}>{date}</StyleNode>
            <StyleNode BEMClass={"accordion__items"}>
                {items.map((item: string, index) => {
                    return (
                        <StyleNode key={index} BEMClass={"accordion__item"}>
                            {item}
                        </StyleNode>
                    );
                })}
            </StyleNode>
        </StyleNode>
    );
};