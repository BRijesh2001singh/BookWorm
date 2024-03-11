import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authenticate } from '../pages/signin';
import Cookies from 'js-cookie';
const Navbar = () => {
    const [check, setCheck] = useState(authenticate.value);
    useEffect(() => {
        const handleChange = () => {
            setCheck(authenticate.value);
        };
        // Subscribe to changes in authenticate.value
        const unsubscribe = authenticate.subscribe(handleChange);
        // Cleanup function to unsubscribe when the component is unmounted
        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                    <h1 className="navbar-brand text-white">BOOKSTORE</h1>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Link className="nav-item nav-link active text-white" to="/">
                                <span>HOME</span>
                            </Link>
                            <Link className="nav-item nav-link text-white" to="/books">
                                <span>BOOKS</span>
                            </Link>
                            {authenticate.value ? <Link className="nav-item nav-link active text-white" to="/profile">
                                <span>PROFILE</span>
                            </Link> : null}
                            {check ? <button className="nav-item nav-link active text-white" onClick={() => {
                                Cookies.remove("uuid");
                                authenticate.value = false;
                                window.location.reload();
                            }} >
                                <span>SIGN-OUT</span>
                            </button> :
                                <Link className="nav-item nav-link active text-white" to="/signin">
                                    <span>SIGN-IN</span>
                                </Link>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
