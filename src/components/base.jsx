import React, { Component } from 'react';
import saferEval from 'safer-eval';
import Digits from '../components/digits';
import Value from '../components/value';

class Base extends Component {
  constructor(props){
    super(props)
    this.state = {
      digits: ['/','*','-', '+', 7, 8, 9, 4, 5, 6,  1, 2, 3, 0, '.', 'C','=' ],
      value: 0,
      calculation: [],
    }
  }
  // getting Value of digit pressed ---
  gettingValue = (e) => {
    let val = e.currentTarget.textContent
    this.setState({calculation: [...this.state.calculation, val]});
  }

  // clear array ---
  clearValue = () => {
    this.setState({
      calculation: [],
      value: 0}
    );
  }

  equals = () => {
    // joining the calculation array together to a string and removing all whitespaces so you get a number - 232 instead of 2 3 2
    let string = this.state.calculation.join('').replace(/\s/g, "");
   
    // calling saferEval to caculate the sum passed in.
    if(string.match(/\d+/g)) {
      const total = saferEval(string);
      console.log(total);

      // setting the total to the value in state
      this.setState({
        value: total,
        calculation: []
      })
    }
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
