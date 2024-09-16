import { useEffect } from "react";
import { login, setUser } from "../redux/slices/userAuth";
import { useDispatch } from "react-redux";
import getName from "../helper/getUserId";
const useAuth = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            dispatch(login(email));
            const { id, name } = getName();
            dispatch(setUser({
                user: email,
                name: name,
                id: id
            }));
        }
        else return;
    }, [])


}
export default useAuth;