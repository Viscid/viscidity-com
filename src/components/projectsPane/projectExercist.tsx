import * as React from 'react';

var SorobanProject = () => {
    return (
        <div className="project"> 
        <h3 className="projectHeader"> <a target="_blank" href="http://exercist.viscidity.com"> Exercist </a> </h3>
        <div className="projectContent">
            <p className="projectDescription"> I wanted to create a timer system for my own personal exercise routines. 
            Though there are an excessive amount of timers out there (mainly pomodoro-type timers) none really met my own
            personal needs. I also wanted to create a project using React &amp; Typescript, which I had never used in concert
            before. </p>
            <video className="projectVideo" src="exercistdemo.webm" autoPlay={true} loop={true} />
            <p className="projectDescription"> <a target="_blank" href="http://exercist.viscidity.com"> Exercist </a> is a <a href="https://reactjs.org/">React</a> &amp; 
            &#32;<a href="https://www.typescriptlang.org/">Typescript</a> application that allows you to create customized exercises and
            routines with complex timings, and then play the routine back with a fairly standard-looking stopwatch interface. I also
            utilized the&#32;<a href="https://bulma.io/">Bulma</a> CSS framework to style the forms and
            &#32;<a href="https://sass-lang.com/">SASS</a> to customize the CSS. </p>
        </div>
    </div>
    );
};

export default SorobanProject;