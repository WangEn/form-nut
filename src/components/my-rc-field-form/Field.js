import React, { Component } from 'react';


export default class Field extends Component {
  getControlled = () => {
    return {
      value: 'omg',
      onChange: (e) => {
        const newValue = e.target.value;
        console.log('newValue:', newValue);
      }
    }
  }
  render () {
    const { children } = this.props;
    const returnChildNode = React.cloneElement(children, this.getControlled())

    return returnChildNode;
  }
}