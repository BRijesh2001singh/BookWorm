import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, setUser } from '../redux/slices/userAuth';
import NavBar from '../component/navBar';
import Favbooks from '../component/getfavbooks';
import Addedbooks from '../component/booksAdded';
import { useNavigate } from 'react-router-dom';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dp1 from "../assets/profile/dp1.jpg";
import dp2 from "../assets/profile/dp2.jpg";
import dp3 from "../assets/profile/dp3.jpg";
import getName from '../helper/getUserId';
import Cookies from 'js-cookie';
const Profile = () => {
    let dp = [
        dp1,
        dp2,
        dp3
    ]
    let rindex = Math.floor(Math.random() * 3);
    const [userName, setUserName] = useState("Guest");
    const [userEmail, setUserEmail] = useState("Guest");
    const { user, username, isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //if user is not present redirect to books
    if (!user && !isAuthenticated) {
        console.log("user not present")
        navigate("/");
    }
    useEffect(() => {
        setUserEmail(user);
        setUserName(username);
    }, [user, username]);
    //get name of user
    useEffect(() => {
        const getDetails = async () => {
            const { id, name } = await getName(user);
            setUserName(name);
            dispatch(setUser({
                user: user,
                name: name,
                id: id
            }));
        }
        getDetails();
    }, [])
    //logout user 
    const logOut = () => {
        const check = window.confirm("You are about to log-out");
        if (check) {
            dispatch(logout());
            Cookies.remove("uuid")
            navigate("/");
        }
        else {
            return;
        }
    }
    return (
        <>
            <NavBar />
            <div className='user-profile'>
                <h1>User Profile</h1>
                <div className='user-board'>
                    <div className='user-board-info'>
                        <img style={{ borderRadius: "100px" }} src={dp[rindex]} />
                        <span>Name:{userName}</span>
                        <span>Email:{userEmail}</span>
                        <button style={{
                            color: "white", fontWeight: "bold", backgroundColor: "red", border: "none"
                            , borderRadius: "5px"
                        }}
                            onClick={() => logOut()}
                        >Log-Out  <FontAwesomeIcon icon={faRightFromBracket} /></button>
                    </div>
                </div>
                <div className='user-book-info text-white '>
                    <div className='user-added-info px-2'>
                        <Addedbooks />
                    </div>
                    <div className='user-fav-info px-2'>
                        <Favbooks />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
