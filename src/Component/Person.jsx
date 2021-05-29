import React from 'react';
import classes from './Person.css';

const Person = (props) => {
  const style = {
    '@media(min-width: 500px)': {
      width: '450px',
    },
  };
  return (
    <div className={classes.Person} style={style}>
      <p onClick={props.click}>
        Hi, I am {props.name}, I am {props.age} years old.!!
      </p>
      <p onClick={props.click}>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
