// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {

    

    render() {
        return(
            <button 
            onClick={(event) => setTimeout(this.props.onDelayedClick, this.props.delay, event)}>
                Delayed Button
            </button>
        )
    }
}