import { Button } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import './Login.css';
import { actionTypes } from '../reducer';
import Register from './Register';

const Login = () => {

    const [{ }, dispatch] = useStateValue();
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false);

    const signInWithGoogle = () => {
        auth.signInWithPopup(provider).then(result => dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        }))
            .catch((error) => alert(error.message));
    }

    const signInWithEmail = () => {
        auth.signInWithEmailAndPassword(emailRef.current.value,
            passwordRef.current.value)
            .then(result => dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            }))
            .catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__header">
                <div className="login__headerLeft">
                    <h2><span>Project</span>Management</h2>
                </div>

                <div className="login__headerRight">
                    <p onClick={() => setIsOpen(false)}>login</p>
                    <p onClick={() => setIsOpen(!isOpen)}>Register</p>
                </div>
                {isOpen && <Register />}
            </div>

            <div className="login__body">

                <form>
                    <input type="text" ref={emailRef} placeholder="Email" />
                    <input type="text" ref={passwordRef} placeholder="password" />
                    <Button variant="contained" color="primary" style={{ marginTop: "1rem", background: "#007bff" }} onClick={signInWithEmail}>Login</Button>
                    <Button variant="contained" color="primary" style={{ marginTop: "1rem", background: "#007bff" }} onClick={signInWithGoogle}>Login with Google</Button>
                </form>

            </div>
        </div>

    )
}

export default Login;
