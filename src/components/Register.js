import React, { useEffect, useRef, useState } from 'react'
import { useStateValue } from '../StateProvider';
import db, { auth, provider } from '../firebase';
import {actionTypes} from '../reducer';

const Register = () => {
  const [users, setUsers] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
    const [{}, dispatch] = useStateValue();
    const emailRef = useRef(null)
    const passwordRef = useRef(null)


    const signUpWithEmail = (e) => {
        e.preventDefault();
        db.collection("Users").add({
          fullName: fullName,
          email: email,
          position:position,
          phone:phone,
          city:city,
        })
        auth.createUserWithEmailAndPassword(emailRef.current.value,
                    passwordRef.current.value,)
                    .then(result => dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        }))
        .catch((error) => alert(error.message));
    }

    // useEffect(() => {
    //   db.collection("Users").add({
    //     fullName: fullName,
    //     email: email,
    //     position:position,
    //     phone:phone,
    //     city:city,
    //   })
    // }, [])

    return (
        <div className="register" style={{display: "grid",placeItem:"center",width:"100%", margin:"0 auto", position:"relative"}}>
            <form className="white" style={{width: "100%", padding: "10px", borderRadius: "7px", position: "absolute", top: "10vh", right: "30%", zIndex:"999"}} >
            <div style={{display: "flex",flexDirection:"row", justifyContent:"space-between"}}>
          <h5 className="grey-text text-darken-4">SignUp</h5>
          </div>
          <div className="input-field">
            <label htmlFor="title">Email</label>
            <input type="text" ref={emailRef} value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Password</label>
            <textarea  className="materialize-textarea" ref={passwordRef}></textarea>
          </div>
          <div className="input-field">
            <label htmlFor="content">FullName</label>
            <textarea  className="materialize-textarea" value={fullName} onChange={(e) => setFullName(e.target.value)} ></textarea>
          </div>
          <div className="input-field">
            <label htmlFor="content">Position</label>
            <textarea   className="materialize-textarea" onChange={(e) => setPosition(e.target.value)} value={position}></textarea>
          </div>
          <div className="input-field">
            <label htmlFor="content">City</label>
            <textarea  className="materialize-textarea" value={city} onChange={(e) => setCity(e.target.value)}></textarea>
          </div>
          <div className="input-field">
            <label htmlFor="content">Phone</label>
            <textarea name="projectDescription"  className="materialize-textarea" value={phone} onChange={(e) => setPhone(e.target.value)}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" onClick={signUpWithEmail}>SignUp</button>
          </div>
        </form>
             
            </div>
    )
}

export default Register
