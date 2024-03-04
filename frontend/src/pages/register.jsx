import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const apiURL = process.env.REACT_APP_API_URL;
    const [displayerror, setdisplayerror] = useState("");
    //handle registeruser
    const registeruser = async (e) => {
        e.preventDefault();
        if (username.length === 0 || email.length === 0 || password.length === 0) {
            setdisplayerror("Fields Cannot be empty");
            return null;
        }
        try {
            const response = await axios.post(`${apiURL}/api/v1/register`, {
                name: username,
                email: email,
                password: password
            });
            console.log(response.status);
            if (response.status === 200) {
                toast.success('New Account Created');
                setusername("");
                setEmail("");
                setPassword("");
            }

        } catch (err) {
            if (err.response.status === 409) {
                setdisplayerror("⚠Email already exists");
            }
        }
    }
    return (
        <div className='verify_container'>
            <form onSubmit={registeruser} className='form-container'>
                <h1 style={{ color: "white" }}>Create Account</h1>
                <label className='name-content'>Name</label>
                <input type='text' name="name" value={username} onChange={(e) => setusername(e.target.value)} />
                <label className='email-content'>Email</label>
                <input type='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className='password-content'>Password</label>
                <input type='password' name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className='display-error'>{displayerror}</div>
                <button className='form-btn'>Register</button>
                <div className='register-toggle'><span className='item1'>Already have an account?</span><Link to="/signin"><span className='item2'>Sign-In</span></Link></div>
            </form>
        </div>
    )
}

export default Register;
