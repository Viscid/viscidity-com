import * as React from 'react';

var ViscityProject = () => {
    return (
        <div className="project"> 
        <h3 className="projectHeader"> <a target="_blank" href="http://www.viscity.org"> Viscity.org </a> </h3>
        <div className="projectContent">
            <a target="_blank" href="http://viscity.org">
                <video className="projectVideo" src="viscitydemo.webm" autoPlay={true}  loop={true} />
            </a>
            <p className="projectDescription"> One of my favourite projects to do is writing forums
            and message boards from scratch. I love the immediate satisfaction that comes from 
            developing an online community and having users appreciate the work put into it. </p>
            <p className="projectDescription"> <a target="_blank" href="http://www.viscity.org">Viscity.org</a>
            &#32;is a recursively-threaded message board that uses
            &#32;<a target="_blank" href="https://vuejs.org/">VueJS</a> and
            &#32;<a target="_blank" href="https://vuex.vuejs.org/en/intro.html">Vuex</a> for the front-end, with
            &#32;<a target="_blank" href="https://nodejs.org/">NodeJS</a>,
            &#32;<a target="_blank" href="https://expressjs.com/">Express</a>, and
            &#32;<a target="_blank" href="https://www.mongodb.com/">MongoDB</a> for the back-end. It incorporates
            websockets using the <a target="_blank" href="https://socket.io/">SocketIO</a> library to provide 
            immediate updates on user activity and online status, along with instant messaging. </p>
            <p className="projectDescription"> The website is currently being used by two guys who provide..
            insight.. into their daily thoughts and lives. </p>

        </div>
    </div>
    );
};

export default ViscityProject; 