import React from 'react';
import {Link} from 'react-router-dom';
import fullLogo from '../utilities/fullLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={fullLogo} width="48px" alt="store" className="navbar-brand" />
                </Link>
            </div>
            <ul className="nav-links">
                <li className="nav-item d-none">
                </li>
                <li className="nav-item">
                    <Link to="/" className="link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/jewelry" className="link">
                        Jewelry
                    </Link>
                </li>
                <li className="nav-item" >
                    <Link to="/engraving_repair" className="link">
                        Engraving/Repair
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/other_projects" className="link">
                        Other Projects
                    </Link>
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
