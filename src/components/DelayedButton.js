// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {

    handleClick = (event) => {
         console.log(this.props.delay)
        this.props.onDelayedClick(event.setTimeout)
        let setTimeout = () => {
             this.props.delay}
    }
	
  render() { return <button onClick={this.handleClick} /> }
}
  
export default DelayedButton