import React from 'react';
import './Experience.scss';
import {StyleNode} from "../../Components/ThemeNodes/StyleNode";
import {Accordion} from "../../Components/Accordion/Accordion";

export const Experience = (): JSX.Element => {
    return (
        <div className="experience">
            <StyleNode BEMClass={"experience__title"}>Professional experience</StyleNode>
            
            <Accordion date={'November 2018 - Current'} company={"HomeSpotter"} location={'Minneapolis'} title={"Senior Product Developer"} items={[
                // Responsible for...
                'Development, project management, support, and design cycles of Boost product.',
                'Lead development on major product releases.',
                'Implementation and maintenance of Boost user interfaces in TypeScript, React, PHP, and HTML.',
                'Implementation and maintenance of Boost backend, primarily a PHP MVC with MYSQL database',
                'Leading initiative to replace PHP/HTML front-end with React and TypeScript.',
                'Leading initiative to replace legacy PHP backend with React, TypeScript and GraphQL',
                'Leading development of ad platform API integrations',

                // Skills?
                'Extensive use of docker, jenkins, rundeck, github, sidekiq and mailhog for development environments and CI.',
                'Extensive use of Kibana, Newrelic, and OpsGenie for server and application monitoring.',
                'Working closely with support teams to ensure rapid response to bugs.',
                'Implemented automated functional testing to automate common QA tasks and provide additional test coverage.',
                'Introduced team to BEM standard to speed up front-end development.',
                'Designed, developed, and released third-party tracking pixel to allow real estate brokers to retarget ads to users viewing similar real estate content within specific parameters.',
                'Developed front and back ends of new subscription product to capitalize on users without active inventory.',
                'Integral member of team responsible for releasing video ads.',
                'Lead developer of Facebook and Beeswax API integrations.',
            ]} />
            <Accordion date={'January 2016 - November 2018'} company={'Firebrand'} location={'Minneapolis'} title={'Lead Developer'} items={[
                'Development, support, design, project management, sales and content creation initiatives at Firebrand.',
                'Leading development team to develop WordPress and Drupal websites for clients.',
            ]} />
            <Accordion date={'May 2015 - January 2016'} company={'LiveEdit'} location={'Plymouth'} title={'Senior Software Engineer'} items={[
                'Development, support, design, and project management initiatives.',
                'Development, support, design, and project management initiatives.',
                'Development, support, design, and project management initiatives.',
                'Development, support, design, and project management initiatives.',
            ]} />
            <Accordion date={'March 2014 - May 2015'} company={'U4EA Studios'} location={'Minneapolis'} title={'Senior Application Developer'} items={[
                'Development, support, design, and project management initiatives',
                'Development, support, design, and project management initiatives',
                'Development, support, design, and project management initiatives',
                'Development, support, design, and project management initiatives',
            ]} />
            <Accordion date={'December 2012 - March 2014'} company={'Ecreativeworks'} location={'Plymouth'} title={'Web Developer'} items={[
                'Developing OSCommerce websites for B2B companies.'
            ]} />
        </div>
    );
}