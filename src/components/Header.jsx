import React from 'react';
import HomeButton from './HomeButton';

function Header(){
  const headerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    textShadow: '2px 2px black'
  };

  return (
    <div style={headerStyles}>
      <h1 style={{marginTop: 70}}>Quickest Acceleration.</h1>
      <h1 style={{marginTop: 35, marginBottom: 35}}>Longest Range. The Safest Cars Ever.</h1>
      <HomeButton />
    </div>
  );
}

export default Header;
