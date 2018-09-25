import React, { Component } from 'react';
import './NavigationBar.sass';
import BubbleEffect from './BubbleEffect/BubbleEffect.jsx';

class NavigationBar extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div styleName="NavigationBar" id="NavigationBar">
                <BubbleEffect
                  color="rgba(200,200,200,.5)"
                  amount="20"
                  minSize="5"
                  maxSize="8"
                  minDuration="2"
                  maxDuration="6"
                  >
                  <span styleName="title">Foxhub Community</span>
                </BubbleEffect>

            </div>
        );
    }
}

export default NavigationBar;
