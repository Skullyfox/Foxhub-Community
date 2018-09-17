import React, { Component } from 'react';
import Routes from './../Routes/Routes.jsx';
import Navbar from './Navbar/Navbar.jsx';

class Layout extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div style={{paddingTop: '67px'}}>
                    <Routes />
                </div>
            </>
        );
    }
}

export default Layout;
