import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = (props) => {
  const style = {
    '@media(min-width: 500px)': {
      width: '450px',
    },
  };
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        Hi, I am {props.name}, I am {props.age} years old.!!
      </p>
      <p onClick={props.click}>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(Person);
