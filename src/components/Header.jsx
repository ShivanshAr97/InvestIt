import React from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";

const Header = ()=>{
    return (
        <div className="navbar">
        <h1 className="logo">InvestIt</h1>
        <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/market">Market</NavLink></li>
                    <li className="login-btn"><NavLink to="/portfolio"><a href="#">View Portfolio</a></NavLink></li>
                </ul>
            </nav>  
            <label for="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>    
    </div>
    );
}

export default Header;