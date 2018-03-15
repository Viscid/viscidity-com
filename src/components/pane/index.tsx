import * as React from 'react';
import AboutPane from '../aboutPane';
import CapabilitiesPane from '../capabilitiesPane';
import ProjectsPane from '../projectsPane';
import ContactPane from '../contactPane';

import { Transition } from 'react-transition-group';

import './pane.css';

import '../transitions.css';

interface PaneProps {
    n: number;
}

enum Panes {
    ABOUT,
    CAPABILITIES,
    PROJECTS,
    CONTACT    
}

enum TransitionState {
    ENTERING = 'entering',
    EXITING = 'exiting',
    EXITED = 'exited',
    ENTERED = 'entered'
}

export default class Pane extends React.Component<PaneProps, {}> {
    render() {
        return (
            <div className="paneContainer">
                    <Transition in={this.props.n === Panes.CAPABILITIES} timeout={150}>
                        {(state: TransitionState) => (
                            <div className={'pane ' + state}>
                                <CapabilitiesPane />
                            </div>
                        )}
                    </Transition>
                    <Transition in={this.props.n === Panes.ABOUT} timeout={150}>
                        {(state: TransitionState) => (
                            <div className={'pane ' + state}>
                                <AboutPane />
                            </div>
                        )}
                    </Transition>
                    <Transition in={this.props.n === Panes.PROJECTS} timeout={150}>
                        {(state: TransitionState) => (
                            <div className={'pane ' + state}>
                                <ProjectsPane />
                            </div>
                        )}
                    </Transition>
                    <Transition in={this.props.n === Panes.CONTACT} timeout={150}>
                        {(state: TransitionState) => (
                            <div className={'pane ' + state}>
                                <ContactPane />
                            </div>
                        )}
                    </Transition>
            </div>
        );
    }
}