import React from 'react';
import './Header.sass';

const Header = () => (
    <header styleName="header">
        <div className="container">
            <h1 styleName="title">RN-Infinity</h1>
            <p styleName="sub-title">React/NodeJs boilerplate on steroids</p>
            <button styleName="cta">Get started</button>
        </div>
    </header>
);

export default Header;
