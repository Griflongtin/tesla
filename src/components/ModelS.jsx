import React from 'react';
import Nav from './Nav';
import modelS from './../assets/images/modelS.jpg';
import ModelXButton from './ModelXButton';

function ModelS(){
  const modelSDiv = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const modelSStyle = {
    width: '100%',
    margin: '0 auto',
    objectFit: 'cover'
  };
  return (
    <div style={modelSDiv}>
      <div style={{backgroundColor: 'black', width: '100%'}}>
        <Nav />
      </div>
      <img style={modelSStyle} src={modelS}/>
      <h1 style ={{padding: 20}}>Meet Model S</h1>
      <p style={{paddingLeft: 20, paddingRight: 20, marginLeft: 30, marginRight: 30, marginBottom: 30, textAlign: 'justify', lineHeight: 1.5}}>Model S is designed from the ground up to be the safest, most exhilarating sedan on the road. With unparalleled performance delivered through Tesla's unique, all-electric powertrain, Model S accelerates from 0 to 60 mph in as little as 2.5 seconds. Model S comes with Autopilot capabilities designed to make your highway driving not only safer, but stress free.</p>
      <ModelXButton />
      <hr/>
    </div>
  );
}

export default ModelS;
