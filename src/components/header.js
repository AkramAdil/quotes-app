import React from 'react';
import { Link } from 'react-router-dom';
import "./headerStyle.css"
import logo from "../pictures/logo0.png"
const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="شعار موقع اقتباس" title="شعار موقع اقتباس"/>
                </div>
                <div className="nav-bar">
                    <ul className="navigation">
                        <li className="list-item"><Link to="/">الرئيسية</Link></li>
                        <li className="list-item"><Link to="/people">الناطقون</Link></li>
                        <li className="list-item"><Link to="/about">من نحن</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;