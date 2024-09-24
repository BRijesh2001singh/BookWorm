import { NavLink, useNavigate } from 'react-router-dom';
import "../App.css"
import { useSelector } from 'react-redux';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import booknav from '../images/booknavic.png';
import { useState } from 'react';
function NavBar() {
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state) => state.auth);
    const [dropdown, setDropDown] = useState(false);
    return (
        <header className='nav-bar'>
            <h1 onClick={() => navigate("/home")}
                className='nav-heading'
                style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bolder"
                }}
            ><img style={{
                width: "60px",
                height: "60px",
            }} src={booknav} />Book<span style={{ color: "lightseagreen", textShadow: "none" }}>Worm</span></h1>
            <nav>
                <ul className='nav-content-box'>
                    <li className={dropdown ? "show" : "nav-content"}>
                        <NavLink className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'} to="/home">Books</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'} to="/blogs">Blogs</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'} to="/addbook">Add books</NavLink>
                        {isAuthenticated ? (<NavLink className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'} to="/userprofile">Profile
                            <FontAwesomeIcon style={{ marginLeft: ".5rem" }} icon={faUser} />
                        </NavLink>) : (<NavLink to="/userlogin" className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}>Login</NavLink>)}

                    </li>
                </ul>
            </nav>
            <div className="hamburger" id="hamburger" onClick={(() => setDropDown(preval => !preval))}>
                &#9776;
            </div>
        </header>
    );
}

export default NavBar;
