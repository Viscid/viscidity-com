import * as React from 'react';

var EffectIndexProject = () => {
    return (
        <div className="project"> 
        <h3 className="projectHeader"> <a target="_blank" href="https://beta.effectindex.com"> Subjective Effect Index (under construction) </a> </h3>
        <div className="projectContent">
            <a target="_blank" style={{float: 'right', padding: '1em'}} href="https://beta.effectindex.com">
                <img src="effectindex.png" />
            </a>
            <p className="projectDescription"> A close aquaintence of mine was creating a new encyclopedic website that catalogued
            the various visual and cognitive effects psychoactive substances have, and to curate artwork that illustrates those effects.
            Unfortunately, the scope of the project exceeded what the platform she was designing the website with (Squarespace) could provide. 
            I began to create a new web application for her from scratch based on the design she had already established on her 
            Squarespace site. </p>

            <p className="projectDescription"> <span style={{fontWeight: 'bold'}}> The website is expected to be completed by the end of August, 2018. </span> </p>

            <p className="projectDescription"> <a target="_blank" href="http://www.viscity.org">The Subjective Effect Index</a>
            &#32;is Universal (Server-Side Rendered) web application using 
            &#32;<a target="_blank" href="https://nuxtjs.org/">Nuxt</a> and
            &#32;<a target="_blank" href="https://vuex.vuejs.org/en/intro.html">Vuex</a> for the front-end, with
            &#32;<a target="_blank" href="https://nodejs.org/">NodeJS</a>,
            &#32;<a target="_blank" href="https://expressjs.com/">Express</a>, and
            &#32;<a target="_blank" href="https://www.mongodb.com/">MongoDB</a> for the back-end. 
            </p>

            <p className="projectDescription"> <span style={{fontWeight: 'bold'}}> Features Include: </span>
                <ul>
                    <li> Progressive Web Application functionality </li>
                    <li> Search Engine Optimized </li>
                    <li> A full user system including user and administration roles </li>
                    <li> Intuitive database-driven editing capabilities for the end-user </li>
                    <li> Custom markup solution for adding stateful Vue components into user-edited documents </li>
                    <li> Custom-made components for artwork galleries and audio players </li>
                </ul>
            </p>
        </div>
    </div>
    );
};

export default EffectIndexProject; 