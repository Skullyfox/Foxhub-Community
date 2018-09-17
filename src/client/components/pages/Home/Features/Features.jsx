import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Features.sass';

const Features = () => (
    <section styleName="wrapper">
        <h2 styleName="title">Features</h2>
        <div styleName="feature-list">
            <figure styleName="feature">
                <div styleName="feature-icon">
                    <FontAwesomeIcon icon="wrench" size="3x" fixedWidth />
                </div>
                <figcaption>
                    <h3 className="text--primary-dark">Minimal Configuration</h3>
                    <p>Rn-Infinity does most of the heavy lifting for you, so just relax and build awesome apps !</p>
                </figcaption>
            </figure>

            <figure styleName="feature">
                <div styleName="feature-icon">
                    <FontAwesomeIcon icon="cubes" size="3x" fixedWidth />
                </div>
                <figcaption>
                    <h3 className="text--primary-dark">Easy bundling</h3>
                    <p>RN-Infinity is powered by <a href="https://webpack.js.org/">Webpack</a> with all its awesome features.</p>
                </figcaption>
            </figure>

            <figure styleName="feature">
                <div styleName="feature-icon">
                    <FontAwesomeIcon icon="rocket" size="3x" fixedWidth />
                </div>
                <figcaption>
                    <h3 className="text--primary-dark">Go Fast</h3>
                    <p>Generators enable you to skip boilerplate code and work faster.</p>
                </figcaption>
            </figure>
        </div>
        <div className="container text-center">
            <Link to="/docs">...and much, much more ! </Link>
        </div>
    </section>
);

export default Features;
