import * as React from 'react';

var SorobanProject = () => {
    return (
        <div className="project"> 
        <h3 className="projectHeader"> <a target="_blank" href="http://onetwo.viscidity.com"> OneTwo Soroban </a> </h3>
        <div className="projectContent">
            <video className="projectVideo" src="sorobandemo.webm" autoPlay={true} loop={true} />
            <p className="projectDescription"> In 2015, I found out there is a very novel approach to teaching children mental 
            arithmetic. It involves training them to visualize a Japanese abacus called a&#32;
            <a target="_blank" href="http://en.wikipedia.org/wiki/Soroban">soroban</a> and to calculate results by seeing 
            operations as the spatial movement of beads. I felt it would be an interesting project to create a training
            application that teaches a student how to use the soroban in a series of lessons that progressively increase in 
            difficulty. </p>

            <p className="projectDescription"> <a target="_blank" href="http://onetwo.viscidity.com">OneTwo Soroban</a>
            &#32;is an application without a back-end, using
            &#32;<a target="_blank" href="http://www.viscity.org">VueJS</a> and
            &#32;<a target="_blank" href="https://vuex.vuejs.org/en/intro.html">Vuex</a>. It uses CSS-animated SVG images for the soroban beads,
            and the <a target="_blank" href="https://howlerjs.com/">Howler</a> library to manage cross-platform compatible sound effects. </p>
        </div>
    </div>
    );
};

export default SorobanProject; 