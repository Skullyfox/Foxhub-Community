import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import myLogo from "./images/SkullyfoxPoly.png"
import './Home.sass';

const fetchData = params => ({ HomeFetch: 'Home' });

export { fetchData };

@subscribe()
class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div styleName="Home">
                <div styleName="About">
                    <div styleName="rowAbout">
                        <img src={ myLogo } styleName="Logo"/>

                        <span styleName="aboutTitle"> Bienvenue sur le site communautaire Foxhub</span>
                        <span styleName="aboutSubtitle"> Qu'est ce que Foxhub Comunity ?</span>

                    </div>

                    <div styleName="rowAbout">
                        <div styleName="WhatSection">
                            <div>
                                <div styleName="CaseHeader">
                                    <i className="fas fa-users CaseIcon"></i>
                                    <span styleName="CaseTitle">Un groupe communautaire</span>

                                </div>

                                <div styleName="CaseBody">
                                    "Foxhub Community" est un ensemble de communautées regroupant des gamers et des développeurs.
                                </div>
                                
                            </div>

                            <div>
                                <div styleName="CaseHeader">
                                    <i className="fas fa-laptop CaseIcon"></i>
                                    <span styleName="CaseTitle">Du développement informatique</span>

                                </div>

                                <div styleName="CaseBody">
                                    La communautée "Foxhub Developpers" est ouverte à tout les développeurs, touts domaines confondus,
                                    avec pour but, l'entre-aide et le collaboratif pour des projets et autres activités.
                                </div>
                                
                            </div>

                            <div>
                                <div styleName="CaseHeader">
                                    <i className="fas fa-gamepad CaseIcon"></i>
                                    <span styleName="CaseTitle">Du gaming</span>

                                </div>

                                <div styleName="CaseBody">
                                    La communautée "Foxhub gaming" est ouverte aux Gamers, des évennements de streamings et autre seront au
                                    rendez-vous, mais avant tout, du fun !
                                </div>

                            </div>

                        </div>

                    </div>
                    
                </div>

            </div>
        );
    }
}

export default Home;
