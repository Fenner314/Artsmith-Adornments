import React from 'react';
import { Link, useHistory, NavLink } from 'react-router-dom';
import fullLogo from '../utilities/fullLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    const currentRoute = useHistory().location.pathname.toLowerCase();

    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/home">
                    <img src={fullLogo} width="48px" alt="store" className="navbar-brand" />
                </Link>
            </div>
            <ul className="nav-links">
                <li className="nav-item">
                    <NavLink to="/home" className={"link"} activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/jewelry" className={"link"} activeClassName="active">
                        Jewelry
                    </NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink to="/engraving_repair" className={"link"} activeClassName="active">
                        Engraving/Repair
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/other_projects" className={"link"} activeClassName="active">
                        Other Projects
                    </NavLink>
                </li>
                <li className="nav-item">
                    Contact Me
                </li>
            </ul>
            <ul className="right-links">
                <i className="fab fa-facebook right-link-item"/>
                <i className="far fa-user-circle right-link-item"/>
                <div className="cart">
                    <i className="fas fa-shopping-bag right-link-item" id="shopping-bag" />
                    <div className="cart-total">0</div>
                </div>
            </ul>
        </div>
    )
}
