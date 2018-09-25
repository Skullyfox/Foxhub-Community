import React from 'react';
import './BubbleEffect.sass';

export default ({color, amount, minSize, maxSize, minDuration, maxDuration, children}) => {
    let bubbles = [];
    for (let i = 0 ; i < amount ; i++){
        let rng = Math.round(Math.random()* maxSize);
        let size = parseInt(minSize,10) + rng + 'px';
        let x = Math.round(Math.random() * 100)+'%';
        let y = 75 + Math.round(Math.random() * 25)+'%';
        let duration = Math.round(Math.random() * maxDuration);
        if (duration < minDuration) duration = minDuration;
        bubbles.push(<div
            key ={i}
            styleName="bubble"
            style={{
                ['--color'] : color,
                ['--size']: size,
                ['--x']: x,
                ['--y']: y,
                ['--duration']: duration+'s'
            }}
        />);
    }
    return (
        <React.Fragment>
            <div styleName="bubbles-container">
                {bubbles}
            </div>
            {children}
        </React.Fragment>

    )
}
