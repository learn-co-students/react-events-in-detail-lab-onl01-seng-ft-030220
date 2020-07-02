import React, { Component } from 'react';

class DelayedButton extends Component {
    
    handleClick = (event) => {
        e.persist()
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }

    render(){
        return(
            <button onClick={this.handleClick} /> 
        )
    }

}

export default DelayedButton

