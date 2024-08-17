import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { login, setUser } from "../redux/slices/userAuth"
import getName from "../helper/getUserId";
const useTokenCheck = () => {
    const dispatch = useDispatch();
    const [token, setToken] = useState("");

    // Get token from cookies
    useEffect(() => {
        const currtoken = Cookies.get('uuid');
        setToken(currtoken);
    }, []);

    // Decode token and update Redux store
    useEffect(() => {
        if (token) {
            const decodedToken = jwtDecode(token);
            if (decodedToken.email) {
                const email = decodedToken.email;
                dispatch(login({ user: email, isAuthenticated: true }));
                const getuserId = async () => {
                    const { id, name } = await getName(email);
                    dispatch(setUser({ username: name, userid: id, user: email }));

                }

                getuserId();
            }
        }
    }, [token, dispatch]);

};

export default useTokenCheck;
