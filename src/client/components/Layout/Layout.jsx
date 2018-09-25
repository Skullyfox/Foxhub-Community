import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Routes from './../Routes/Routes.jsx';
import NavigationBar from './NavigationBar/NavigationBar.jsx';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar />
                <Routes />
            </React.Fragment>
        );
    }
}

export default Layout;
 