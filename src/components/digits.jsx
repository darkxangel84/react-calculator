import React, { Component } from 'react'

 class Digits extends Component {

  render() {

    // mapping over the digits array with all the digits and making a li list.
    const li = this.props.data.digits.map((digit, i) => {
     
      if(digit >= 0 || digit <=9 ){
        return <li className="digit num" 
        onClick={(e) => this.props.gettingValue(e)} key={i}> {digit}
      </li>
      } else if (digit === '=') {
        // Return the Equals button
        return <li className="digit equals" onClick={() => this.props.equals()}> {digit}
      </li>
      } else if (digit === 'C' || digit === 'c') {
        return <li className="digit clear" 
        onClick={(e) => this.props.clearValue(e)} key={i} > {digit}
      </li>
      } else {
        return <li className="digit" 
        onClick={(e) => this.props.gettingValue(e)} key={i} > {digit}
        </li>
      }
      
    })

    return (
      <div className="digitsContainer">
          <ul className="row">
           {li}
          </ul>
      </div>
    )
  }
}

export default Digits
