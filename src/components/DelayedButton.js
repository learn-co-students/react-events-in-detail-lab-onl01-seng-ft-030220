// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
  logDelayed = e => {
    e.persist();
    setTimeout(() => {
      return this.props.onDelayedClick(e)
    }, this.props.delay)
  }
  render() {
    return (
      <button onClick={this.logDelayed}>Delayed</button>
    )
  }
}
