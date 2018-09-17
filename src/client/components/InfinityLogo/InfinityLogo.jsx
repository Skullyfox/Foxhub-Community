import React from 'react';
import './InfinityLogo.sass';

const InfinityLogo = ({ scale }) => {
    return (
        <div styleName="infinity-wrapper">
            <div styleName="infinity" style={{'--scale' : scale}}/>
            <div styleName="infinity-overlay" style={{'--scale' : scale}}/>
        </div>
    );
};

export default InfinityLogo;
