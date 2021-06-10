import {IconButton,  } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import SidebarOption from './SidebarOption';
import { useHistory } from 'react-router';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import { Link } from "react-router-dom";


const Sidebar = () => {
    const history = useHistory();
    
    return (
        <div className="sidebar">
           <div className="sidebar__header">
           <IconButton onClick={() => history.push("/")}>
               <DashboardIcon className="sidebar__headerIcon"/>
           </IconButton>
               <h3 style={{fontWeight:"bold"}} onClick={() => history.push("/")}>Dashboard</h3>
           </div>
           
           <div className="sidebar__body">
           <Link to="/CreateProject" style={{textDecoration: "none"}}>
           <SidebarOption Icon={AddIcon}  title="Add Project" />
           </Link>
           <Link to="/User" style={{textDecoration: "none"}}>
           <SidebarOption Icon={PersonIcon}  title="User Profile" />
           </Link>
           <Link to="/Projects" style={{textDecoration: "none"}}>
           <SidebarOption Icon={FormatListNumberedIcon}  title="Projects" />
           </Link>
           <Link to="/Team" style={{textDecoration: "none"}}>
           <SidebarOption Icon={GroupIcon}  title="Team Member" />
           </Link>
           <SidebarOption Icon={LocalActivityIcon}  title="Active Clients"/>
           <SidebarOption Icon={AllInclusiveIcon}  title="About Us"/>
           </div>
        </div>
    )
}

export default Sidebar;
