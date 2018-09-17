import React from 'react';
import css from './Header.sass';

const Header = () => (
    <header styleName="header">
        <div styleName="grid" className="container">
            <div styleName="text">
                <h1 styleName="title">RN-Infinity</h1>
                <p styleName="sub-title">
                    React/NodeJs boilerplate on steroids
                </p>
                <button styleName="cta">Get started</button>
            </div>
            <div styleName="assembly">
                <div className={css['computer-top']} />
                <div className={css['computer-bottom']} />
            </div>
        </div>
    </header>
);
export default Header;
