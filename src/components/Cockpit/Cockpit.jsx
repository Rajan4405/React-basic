import React, { useEffect } from 'react';
import classes from './Cockpit.css';
const Cockpit = (props) => {
  useEffect(() => {
    console.log("useEffect [Cockpit.js]");
    // http request
    setTimeout(() => {
      alert("Saved data to cloud")
    }, 1000)
  }, [])

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');

    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  // useEffect();

  const assignClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength < 3) {
    assignClasses.push(classes.red);
  }

  if (props.personsLength < 2) {
    assignClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
