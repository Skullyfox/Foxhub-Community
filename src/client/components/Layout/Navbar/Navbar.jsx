import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './../../InfinityLogo/InfinityLogo.jsx';
import css from './Navbar.sass';
import flagEN from './../../../assets/flag-en.png';
import flagFR from './../../../assets/flag-fr.png';

const Navbar = () => (
    <nav styleName="navbar">
        <div className="container flex-columns">
            <div styleName="navbar-left">
                <Link to="/" styleName="navbar-item">
                    <Logo scale="0.15" />
                </Link>
            </div>
            <div styleName="navbar-right">
                <NavLink
                    to="/docs"
                    styleName="navbar-item"
                    activeClassName={css.active}
                >
                    Docs
                </NavLink>
                <a
                    href="https://github.com/loicpennequin/RN-Infinity"
                    styleName="navbar-item"
                >
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
                <button styleName="navbar-item flag">
                    <img src={flagEN} />
                </button>
                <button styleName="navbar-item flag">
                    <img src={flagFR} />
                </button>
            </div>
        </div>
    </nav>
);

export default Navbar;
