import React, { useState } from 'react';
import './AddTeam.css';
import db from '../../firebase';
import { useHistory } from 'react-router';

const AddTeam = () => {
  const [position, setPosition] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState("");
  const history = useHistory();


  const onSubmit = (e) => {
    e.preventDefault();
    db.collection("Team").add({
      position: position,
      fullName: fullName,
      email: email,
      phone: phone,
      address: address,
    })
    history.push("/Team")
  }

  return (
    <div className="add">
      <form className="userUpdateForm" onSubmit={(e) => onSubmit(e)}>
        <div className="userUpdateLeft">
          <div className="userUpdateItem">
            <label>Position</label>
            <input
              type="text"
              name="Position"
              placeholder="React Developer"
              className="userUpdateInput"
              required
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="userUpdateItem">
            <label>Full Name</label>
            <input
              type="text"
              name="FullName"
              placeholder="Prince Kumar"
              className="userUpdateInput"
              required
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="userUpdateItem">
            <label>Email</label>
            <input
              type="email"
              name="Email"
              placeholder="prince.kumar@gmail.com"
              className="userUpdateInput"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="userUpdateItem">
            <label>Phone</label>
            <input
              type="number"
              name="Phone"
              placeholder="9661794532"
              className="userUpdateInput"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="userUpdateItem">
            <label>Address</label>
            <input
              type="text"
              name="Address"
              placeholder="Noida | India"
              className="userUpdateInput"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

        </div>

        <div className="userUpdateRight">
          <button className="userUpdateButton">Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddTeam;
