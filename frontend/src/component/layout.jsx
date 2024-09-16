import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { login } from '../redux/slices/userAuth';
import { useDispatch } from 'react-redux';
// import useTokenCheck from '../hooks/tokencheck';
const Layout = () => {
    // useTokenCheck();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            navigate("/home")
            dispatch(login(email));
        }
    }, [])
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Layout;
