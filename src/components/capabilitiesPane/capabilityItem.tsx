import * as React from 'react';

interface CapabilityItemProps {
    name: string;
}

var CapabilityItem = (props: CapabilityItemProps) => {
    return (
        <li className="capabilitiesListItem">
            <img className="capabilitiesListItemIcon" src={'./' + props.name.toLocaleLowerCase() + '.svg'} />
            <p className="capabilitiesListItemName"> {props.name} </p>
        </li>
    );
};

export default CapabilityItem;