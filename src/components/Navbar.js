import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import fullLogo from '../utilities/fullLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import cx from 'classnames';
import { ProductContext } from '../App';
// import { Link as linkScroll } from "react-scroll";


export default function Navbar() {
    const [nav, setNav] = useState(false);
    const [menuButton, setMenuButton] = useState(false);
    const [menu, setMenu] = useState(false);

    const { cartLength } = useContext(ProductContext);

    const changeNavHeight = () => {
        window.scrollY >= 105 ? setNav(true) : setNav(false)
    }

    const addMenuButton = () => {
        window.innerWidth < 1200 ? setMenuButton(true) : setMenuButton(false)
    }

    const handleResizeMenu = () => {
        window.innerWidth < 1200 ? setMenu(true) : setMenu(false)
    }

    const handleMenuToggle = () => {
        menu ? setMenu(false) : setMenu(true);
    }

    window.addEventListener('scroll', changeNavHeight);
    window.addEventListener('resize', () => {
        addMenuButton();
        handleResizeMenu();
    });
    window.addEventListener('load', () => {
        addMenuButton();
        handleResizeMenu();
    });

    return (
        <div className="navbar">
            <div className="logo">
                <Link exact to="/">
                    <img src={fullLogo} width="48px" alt="store" className={nav ? "navbar-brand nav-scroll" : "navbar-brand"} />
                </Link>
            </div>
            <ul className={cx(
                menuButton ? "nav-links-menu" : "nav-links-top",
                menu && menuButton ? "translate-100" : "translate-0"
            )}>
                <i className={menuButton ? "fas fa-times fa-2x menu-close" : "d-none"} onClick={handleMenuToggle}></i>
                <li className="nav-item" onClick={handleMenuToggle}>
                    <NavLink exact to="/" className={"link"} activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item" onClick={handleMenuToggle}>
                    <NavLink to="/jewelry" className={"link"} activeClassName="active">
                        Jewelry
                    </NavLink>
                </li>
                <li className="nav-item" onClick={handleMenuToggle}>
                    <NavLink to="/engraving_repair" className={"link"} activeClassName="active">
                        Engraving/Repair
                    </NavLink>
                </li>
                <li className="nav-item" onClick={handleMenuToggle}>
                    <NavLink to="/other_projects" className={"link"} activeClassName="active">
                        Other Projects
                    </NavLink>
                </li>
                <li className="nav-item link" onClick={handleMenuToggle}>
                    <a className="link" href="#contact">Contact Me</a>
                </li>
                <li className="nav-item large-screen-d-none">
                    <a href="https://www.facebook.com/artsmithadornments" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook right-link-item"/>
                    </a>
                    <i className="far fa-user-circle right-link-item"/>
                </li>
            </ul>
            <ul className="right-links">
                <a href="https://www.facebook.com/artsmithadornments" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook right-link-item small-screen-d-none"/>
                </a>
                <i className="far fa-user-circle right-link-item small-screen-d-none"/>
                <Link to="/cart">
                    <div className="cart">
                        <i className="fas fa-shopping-bag right-link-item" id="shopping-bag" />
                        <div className="cart-total">{cartLength}</div>
                        {/* <div className="cart-total">{parseInt(cartLength)}</div> */}
                    </div>
                </Link>
                <div className={menuButton ? "burger" : "burger d-none"} onClick={handleMenuToggle}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </ul>
            <div 
                className={cx(
                    menu ? "nav-overlay-inactive" : "nav-overlay-active",
                    !menuButton ? "nav-overlay-inactive" : ""
                    )} 
                onClick={handleMenuToggle}>
            </div>
        </div>
    )
}
