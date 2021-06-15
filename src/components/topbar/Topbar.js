import React from 'react';
import './Topbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import { Avatar, Button, IconButton } from '@material-ui/core';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';
import { actionTypes } from '../../reducer';

const Topbar = ({ openBurger }) => {
    const [{ user }, dispatch] = useStateValue();

    const handleClick = () => {
        auth.signOut().then(() =>
            dispatch({
                type: actionTypes.REMOVE_USER,
            })
        )
            .catch((error) => alert(error.message));
    }


    return (
        <div className="topbar">
            <div className="topbar__wrapper">
                <div className="topbar__left">
                    <IconButton>
                        <MenuIcon onClick={openBurger} />
                    </IconButton>
                </div>
                <div className="topbar__middle">
                    <input type="text" placeholder="Search Here" />
                </div>
                <div className="topbar__right">
                    <div className="topbar__rightIconWrapper">
                        <NotificationsNoneOutlinedIcon />
                        <span className="topbar__rightIconBadge">4</span>
                    </div>
                    <div className="topbar__rightIconWrapper">
                        <EmailOutlinedIcon />
                        <span className="topbar__rightIconBadge">7</span>
                    </div>
                    <Avatar src={user.photoURL} className="topbar__rightImage" />
                    <div className="topbar__rightIconWrapper">
                        <Button variant="contained" color="primary" style={{ backgroundColor: "teal", fontWeight: "550", textTransform: "capitalize" }} onClick={handleClick}>SignOut</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;
