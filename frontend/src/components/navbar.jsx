import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
    return (<div>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <h1 className="navbar-brand text-white">BOOKSTORE</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                        <Link className="nav-item nav-link active text-white" to="/addbooks">
                            <span>ADDBOOKS</span>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;
