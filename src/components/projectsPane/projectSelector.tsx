import * as React from 'react';

import './projectSelector.css';

interface ProjectSelectorProps {
    count: number;
    onSelect?: (projectNumber: number) => void;
}

interface ProjectSelectorState {
    selectedBullet: number;
}

export default class ProjectSelector extends React.Component<ProjectSelectorProps, ProjectSelectorState> {
    constructor (props: ProjectSelectorProps) {
        super(props);
        this.state = { selectedBullet: 0 };
    }

    selectBullet = (bulletIndex: number) => {
        this.setState( { selectedBullet: bulletIndex } );
        if (this.props.onSelect) { this.props.onSelect(bulletIndex); }
    }

    render() {
        let bullets = [];
        for (var i = 0; i < this.props.count; i++) {
            bullets.push(
                <span className={'bullet ' + (i === this.state.selectedBullet ? 'active' : '')}> &#8226; </span>
            );
        }

        return (<div> {bullets.map((bullet, index) => <a key={index} onClick={() => this.selectBullet(index)}> {bullet} </a>)} </div>);
    }
}