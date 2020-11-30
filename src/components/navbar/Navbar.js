import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="content">
                    <div className="logo">
                        <Link to="/">TOPDEV</Link>
                    </div>
                    <ul className="menu-list">
                        <li> <Link to="/about">ABOUT</Link> </li>
                        <li> <Link to="/contact">CONTACT</Link> </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
