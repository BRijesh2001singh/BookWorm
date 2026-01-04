import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/slices/userAuth';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../login.css";
function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [userPassword, setUserPassword] = useState(false);
    const [remember, setRemember] = useState(false);
    const apiURL = import.meta.env.VITE_APP_API_URL;
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);
    const signin = async (e) => {
        e.preventDefault();
        setLoader(true);
        if (email.length === 0 || password.length === 0) {
            setError("Email or Password Cannot be empty.");
            return null;
        }
        try {
            const response = await axios.post(`${apiURL}/api/v1/signin`, {
                email: email,
                password: password
            }, { withCredentials: true })
            if (response.status === 200) {
                setLoader(false);
                if (remember) {
                    localStorage.setItem('email', email);
                }
                setEmail("");
                setPassword("");
                dispatch(login(email));
                navigate("/userprofile")
            }

        } catch (err) {
            if (err.response.status === 404) {
                setLoader(false);
                setError("⚠Email Not registered");
                return;
            }
            else if (err.response.status === 401) {
                setLoader(false);
                setError("⚠Wrong Password");
                return;
            }
        }

    }
    const handlecheck = (e) => {
        if (e.target.checked) {
            setRemember(true);
        }
        else setRemember(false);
    }
    useEffect(() => {
        setError("");
    }, [email, password]);

    return (
        <div className="sign-in-container">
            <form onSubmit={signin}>
                <h1 className='signh'>Sign-In</h1>
                <input
                    autoComplete='current-email'
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    autoComplete='current-password'
                    type={userPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='button' onClick={() => setUserPassword(!userPassword)}><FontAwesomeIcon icon={faEye} /></button>
                <span className='error-msg'>{error}</span>
                <div className="remember_me">
                    <input type='checkbox' onChange={(e) => handlecheck(e)} /><span>Remember me.</span>
                </div>

                {loader ? <div className='signin-loader'></div> : <button type='submit'>Sign-In</button>}
            </form>
        </div>
    );
}

export default SignInForm;