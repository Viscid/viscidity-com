import * as React from 'react';

import './projectsPane.css';

import ProjectSelector from './projectSelector';

import ViscityProject from './projectViscity';
import SorobanProject from './projectSoroban';
import ProjectExercist from './projectExercist';
import KanaryProject from './projectKanary';
import EffectIndexProject from './projectEffectIndex';

interface ProjectsPaneState {
    selectedProject: number;
}

export default class ProjectsPane extends React.Component<{}, ProjectsPaneState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedProject: 0
        };
    }

    selectProject = (index: number) => {
        this.setState({
            selectedProject: index
        });
    }

    render() {
        let projects = [
            (<ViscityProject />),
            (<EffectIndexProject />),
            (<KanaryProject />),
            (<SorobanProject />),
            (<ProjectExercist />),
        ];

        return (
            <div>
                <ProjectSelector count={projects.length} onSelect={this.selectProject} />
                <div className="projectsContainer">
                    {projects[this.state.selectedProject]}
                </div>
            </div>
        );
    }
}