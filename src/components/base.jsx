import React, { Component } from 'react'

import Value from '../components/value'
import Digits from '../components/digits'

class Base extends Component {
  constructor(props){
    super(props)
    this.state = {
      digits: ['C', 'c', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.','='],
      value: 0,
      calculation: [],
    }
  }
  // getting Value of digit pressed ---
  gettingValue = (e) => {
    let val = e.currentTarget.textContent
    console.log(val)
    this.setState({calculation: [...this.state.calculation, val]});
    
  }

  // clear array ---
  clearValue = () => {
    this.setState({calculation: []});
  }

  equals = () => {
    let string = this.state.calculation.toString();
    console.log(string);
    // const total = eval(string);
    // console.log(total);
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.title}</h1>
        <div className="calculatorContainer">
          <Value data={this.state}/>
          <Digits data={this.state} gettingValue={this.gettingValue} clearValue={this.clearValue} equals={this.equals}/>
        </div>
      </React.Fragment>
     
    )
  }
}

export default Base;
