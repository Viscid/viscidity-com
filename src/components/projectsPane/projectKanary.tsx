import * as React from 'react';

var SorobanProject = () => {
    return (
        <div className="project"> 
        <h3 className="projectHeader"> <a target="_blank" href="http://kanary.viscidity.com"> Kanary </a> </h3>
        <div className="projectContent">
            <p className="projectDescription"> Always looking to learn new things, and with an interest in Japanese culture and language, I wanted
            a simple way to memorize and reinforce understanding of Japanese characters (kana.) </p>
            <a target="_blank" href="http://kanary.viscidity.com"> <img src="kanary.png" /> </a>
            <p className="projectDescription"> <a target="_blank" href="http://kanary.viscidity.com"> Kanary </a> is a <a href="https://reactjs.org/">React</a> &amp; 
            &#32;<a href="https://www.typescriptlang.org/">Typescript</a> application that makes it easy to select which Hiragana or Katakana characters
            you want to study and then presents them randomly in a flashcard-like manner. I hope to soon expand the capabilities of the app to include 
            tracking which Kana you're having difficulties with.  </p>
        </div>
    </div>
    );
};

export default SorobanProject;