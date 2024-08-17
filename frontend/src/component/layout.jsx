import { Outlet } from 'react-router-dom';
import useTokenCheck from '../hooks/tokencheck';
const Layout = () => {
    useTokenCheck(); // Call the custom hook here

    return (
        <div>
            <Outlet /> {/* This will render the matched child route component */}
        </div>
    );
};

export default Layout;
