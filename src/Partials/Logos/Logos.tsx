import React, {useState} from 'react';
import './Logos.scss';
import {StyleNode} from "../../Components/ThemeNodes/StyleNode";
import ReactInterval from 'react-interval';
import set = Reflect.set;


interface OverviewProps {
    logos?: Array<React.FunctionComponent<React.SVGProps<SVGSVGElement>>>
}

// this number is arbitrary
const maxNumberOfSlides = 10;

export const Logos = ({logos: logos}: OverviewProps): JSX.Element => {

    const getNewEmptyArray = (): boolean[] => { // aka Array<boolean>
        return new Array(logos?.length).fill(false);
    }

    const getActiveClass = (index: number): string => {
        return isIndexActive(index) ? 'active' : '';
    }

    const isIndexActive = (index: number): boolean => {
        const activeLogo = activeLogos[index];

        if (typeof activeLogo !== 'boolean') {
            throw Error(`Array index out of bounds!`);
        }

        return activeLogos[index];
    }

    const updateLogos = () => {
        setActiveLogos(getNewEmptyArray().map((el, index) => {
            return index === offSet;
        }));

        // Increment the skip and keep it smaller then array length
        setOffset((offSet + 1) % (logos?.length ?? maxNumberOfSlides));
    }

    const initialLogoState = getNewEmptyArray();
    const [activeLogos, setActiveLogos] = useState(initialLogoState);
    const [offSet, setOffset] = useState(0);

    return (
        <StyleNode BEMClass="logos">
            <ReactInterval timeout={1750} enabled={true} callback={updateLogos}/>
            {logos && logos.map((Logo, index) => {
                return (
                    <StyleNode key={index} BEMClass={"logos__logo"} className={`${getActiveClass(index)}`}>
                        <Logo className={`logos__logo__svg`}/>
                    </StyleNode>
                )
            })}
        </StyleNode>
    );
}