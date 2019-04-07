import React, { Component } from 'react'

 class Value extends Component {
  render() {
    const {calculation} = this.props.data;
    
    const digits = calculation.map(digit => digit)

    return (
      
      <div className="inputBox">
        <span>{calculation.length <= 0 ? 0 : digits}</span>
      </div>
    )
  }
}


export default Value;
