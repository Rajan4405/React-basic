import React, { Component } from 'react';
import classes from './Person.css';
// import Aux from '../../../hoc/Auxilliary'
class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <React.Fragment>
        <p onClick={this.props.click}>
          Hi, I am {this.props.name}, I am {this.props.age} years old.!!
        </p>
        <p onClick={this.props.click}>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </React.Fragment>
    );
  }
}

export default Person;
