import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import './Sign.sass';

const fetchData = params => ({ signFetch: 'sign' });

export { fetchData };

@subscribe()
class Sign extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>Sign works !</p>
        );
    }
}

export default Sign;
