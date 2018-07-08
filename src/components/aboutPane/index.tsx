import * as React from 'react';
import './aboutPane.css';

export default class AboutPane extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }
    render() {
        return (
                <div className={'aboutPaneContainer pane '}>
                    <h2 className="aboutPaneHeader"> About Myself </h2>
                    <p> 
                        <img className="profilePic" src="profile.png" />
                        I've been programming and developing websites for over 15 years, but it's only recently that I've decided to turn my hobby into a career.
                        With the release of Javascript frameworks such 
                        as <a href="https://angular.io/">Angular</a>, <a href="https://reactjs.org/">React</a> and <a href="https://vuejs.org/">VueJS</a>,
                        developing web applications has changed from the frustrating process that was developing with PHP for IE6 in the early 00s, to the elegance of
                        advanced Javascript frameworks running on standards-compliant browsers today. I now find web development pretty fun.
                    </p>

                    <p> My design philosophy values simplicity, intuitiveness, and clarity in both aesthetics and code. When a user tries a new application,
                        they should be able to use it effectively without training. The code should be efficient, easily comprehensible and functional, allowing
                        additions and revisions to be as pain-free as possible. </p>
                        
                    <p> I try to stay as up-to-date as possible regarding the latest design trends, evaluating and learning new technologies and paradigms as 
                        they gain popularity. I have found it fascinating to see the web development process change so dramatically over the years,
                        and I am excited to see how it will further evolve. </p>
                </div>
            );
    }
}