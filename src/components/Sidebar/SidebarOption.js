import React from 'react';
import './SidebarOption.css';
import { IconButton } from '@material-ui/core';

const SidebarOption = ({Icon, title}) => {
    return (
        <div className="sidebarOption">
            <IconButton>
                <Icon className="sidebarOption__icon"/>
            </IconButton>
            <h4 className="sidebarOption__title">{title}</h4>
        </div>
    )
}

export default SidebarOption;