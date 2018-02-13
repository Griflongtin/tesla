import React from 'react';
import logo from './../assets/images/logo.png';

function Logo(){

  const logoStyle = {
    width: 100,
    filter: 'invert(100%)'
  };
  return (
    <div>
      <img style={logoStyle} src={logo}/>
    </div>
  );
}

export default Logo;
