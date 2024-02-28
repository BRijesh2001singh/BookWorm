import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { signal } from "@preact/signals-react";
export const authenticate = signal(false);
export const authenticatedUser = signal("");
const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const apiURL = process.env.REACT_APP_API_URL;
    const [displayerror, setdisplayerror] = useState(" ");
    const navigate = useNavigate();

    //handle signin
    const handlesignin = async (e) => {
        e.preventDefault();
        if (email.length === 0 || password.length === 0) {
            setdisplayerror("Fields Cannot be empty");
            return null;
        }
        try {
            const response = await axios.post(`${apiURL}/api/v1/signin`, {
                email: email,
                password: password
            });
            if (response.status === 200) {
                authenticate.value = true;
                authenticatedUser.value = email;
                const response = await axios.post(`${apiURL}/api/v1/getuser`, {
                    email: authenticatedUser
                });
                authenticatedUser.value = (response.data.name);
            }
            navigate('/');

        } catch (err) {
            if (err.response.status === 404) setdisplayerror("Email Not registered");
            else if (err.response.status === 401) {
                setdisplayerror("Wrong Password");
            }
        }
    }
    return (
        <div className='verify_container'>
            <form onSubmit={handlesignin} className='form-container'>
                <h1 style={{ color: "white" }}>Welcome Back</h1>
                <label className='email-content'>Email</label>
                <input type='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className='password-content'>Password</label>
                <input type='password' name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className='display-error'>{displayerror}</div>
                <button className='form-btn'>Sign-In</button>
                <div className='register-toggle'><span className='item1'>New User?</span><Link to="/register"><span className='item2'>Create Account</span></Link></div>
            </form>
        </div>
    )
}

export default Signin;
