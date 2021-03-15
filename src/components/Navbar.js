import React from 'react';
import {Link} from 'react-router-dom';
import fullLogo from '../fullLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import bag from '../bag.png';


export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={fullLogo} width="48px" alt="store" className="navbar-brand" />
            </div>
            <ul className="nav-links">
                <li className="nav-item d-none">
                </li>
                <li className="nav-item">
                    Home
                </li>
                <li className="nav-item">
                    Jewelry
                </li>
                <li className="nav-item">
                    Engraving/Repair
                </li>
                <li className="nav-item">
                    Other Projects
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
