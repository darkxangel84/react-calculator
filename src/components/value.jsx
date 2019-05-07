import React, { Component } from 'react';

 class Value extends Component {
  render() {
    const {calculation, value} = this.props.data;
    
    const digits = calculation.map(digit => digit);

    return (
      
      <div className="inputBox">
      {/* if there isn't a value show the digits being clicked. else show the value. */}
      {!value ? <span>{calculation.length <= 0 ? 0 : digits.join('').replace(/\s/g, "")}</span> : value}
      </div>
    )
  }
}


export default Value;
