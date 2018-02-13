import React from 'react';
import Nav from './Nav';
import dontPanic from './../assets/images/dont-panic.jpg';
import ModelXButton from './ModelXButton';

function ModelX(){
  const modelXDiv = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
  const panicStyle = {
    width: '100%',
    margin: '0 auto'
  };
  return (
    <div style={modelXDiv}>
      <div style={{backgroundColor: 'black', width: '100%'}}>
        <Nav />
      </div>
      <img style={panicStyle} src={dontPanic}/>
      <h1 style ={{padding: 20}}>Meet Model X</h1>
      <p style={{paddingLeft: 20, paddingRight: 20, marginLeft: 30, marginRight: 30, marginBottom: 30, textAlign: 'justify', lineHeight: 1.5}}>Model X is the safest, quickest, and most capable sport utility vehicle in history. Designed as a family car without compromise, Model X comes standard with all-wheel drive, ample seating for up to seven adults, standard active safety features, and up to 295 miles of range on a single charge. And it's the quickest SUV in production, capable of accelerating from zero to 60 miles per hour in 2.9 seconds.</p>
      <ModelXButton />
      <hr/>
    </div>
  );
}

export default ModelX;
