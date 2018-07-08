import * as React from 'react';
import './capabilitiesPane.css';
import CapabilityItem from './capabilityItem';

export default class CapabilitiesPane extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }
    render() {
        return (
            <div className="capabilitiesPaneContainer">
                <h2 className="capabilitiesPaneHeader"> My Capabilities </h2>
                <ul className="capabilitiesList">
                {['HTML5', 'Javascript', 'ES6', 'Typescript', 'CSS3', 'NodeJS', 'React', 'VueJS', 'Nuxt',
            'Angular', 'MongoDB', 'MySQL', 'Webpack', 'Git', 'Gulp', 'JQuery', 'Python', 'PHP'].map((name, index) => {
                return <CapabilityItem key={index} name={name} />;
            })}
                </ul>
            </div>
        );
    }
}