import * as React from 'react';

import './contactPane.css';

export default class ContactPane extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h2> Contact Info </h2>
                <div className="contactInfoContainer">
                    <p className="contactInfoDescription">
                        The best way to contact me is via e-mail,
                        but feel free to call or text.
                    </p>
                    <div className="contactData">
                        <div className="contactDataLabel"> E-Mail: </div> 
                        <div className="contactDataContent"> viscid@gmail.com </div>
                    </div>
                    <div className="contactData">
                        <div className="contactDataLabel"> Phone/Text: </div> 
                        <div className="contactDataContent"> (647) 703-2984 </div>
                    </div>
                    <div className="contactData">
                        <div className="contactDataLabel"> Github: </div> 
                        <div className="contactDataContent"> <a href="http://www.github.com/viscid"> http://www.github.com/viscid/ </a> </div>
                    </div>
                </div>

            </div>
        );
    }
}