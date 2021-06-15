import { Avatar } from '@material-ui/core';
import React from 'react';
import './NewMember.css';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

const NewMember = ({ name, position }) => {
    return (
        <div className="newmember">
            <Avatar />
            <div className="newmember__info">
                <h3>{name}</h3>
                <h6>{position}</h6>
            </div>
            <VisibilityOutlinedIcon />
        </div>
    )
}

export default NewMember;
