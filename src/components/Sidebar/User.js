import React, { useState} from 'react';
import './User.css';
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
import { Avatar} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

const User = () => {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [{ user }] = useStateValue();

  console.log(user);  

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  

    return (
        <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">User Profile</h1>
        <Link to="/AddTeam" style={{textDecoration: "none"}}>
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <Avatar src={user.photoURL}/>
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.displayName}</span>
              <span className="userShowUserTitle">Project Manager</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">userName</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10/03/1997</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">phone</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">address</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={handleSubmit}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="prince99"
                  className="userUpdateInput"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Date of Birth</label>
                <input
                  type="text"
                  placeholder="10/03/1997"
                  className="userUpdateInput"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="prince.kumar@gmail.com"
                  className="userUpdateInput"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="9661794532"
                  className="userUpdateInput"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Noida | India"
                  className="userUpdateInput"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            
            <div className="userUpdateRight">
              <button className="userUpdateButton" onClick={handleSubmit}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}

export default User;
