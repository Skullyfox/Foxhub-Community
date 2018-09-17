import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import './Docs.sass';

const fetchData = params => ({ docsFetch: 'docs' });

export { fetchData };

@subscribe()
class Docs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>Docs works !</p>
        );
    }
}

export default Docs;
