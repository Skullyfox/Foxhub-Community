import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import Header from './Header/Header.jsx';
import Features from './Features/Features.jsx';
import './Home.sass';

const fetchData = params => ({});

export { fetchData };

@subscribe()
class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />
                <Features />
            </>
        );
    }
}

export default Home;
