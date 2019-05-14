import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => <nav className="navbar navbar-default navbar-fixed-top" id="navbar">
    <div className="container">
        <div className="navbar-header">
            <button className="collapsed navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">Digital Brain</Link>
        </div>
        <div className="collapse navbar-collapse js-navbar-collapse">
            <ul className="nav navbar-nav navbar-left">
                <li>
                    <NavLink to="/menu" activeClassName="active">Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">

            </ul>
        </div>
    </div>
</nav>;

export default Header;