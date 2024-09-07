import { NavLink, useNavigate } from 'react-router-dom';
import "../App.css"
import { useSelector } from 'react-redux';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import booknav from '../images/booknavic.png';
function NavBar() {
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state) => state.auth);
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
            }} src={booknav} />BookWorm</h1>
            <nav>
                <ul className='nav-content-box'>
                    <li className='nav-content'>
                        <NavLink className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'} to="/home">Books</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'} to="/addbook">Add books</NavLink>
                        {isAuthenticated ? (<NavLink className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'} to="/userprofile">Profile
                            <FontAwesomeIcon style={{ marginLeft: ".5rem" }} icon={faUser} />
                        </NavLink>) : (<NavLink to="/userlogin" className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}>Login</NavLink>)}

                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
