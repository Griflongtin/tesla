import React from 'react';

function HomeButton(){
  const buttonDivStyles = {
    display: 'flex',
  };
  const buttonStyles = {
    backgroundColor: 'rgba(107, 107, 107, 0.35)',
    width: 130,
    height: 40,
    margin: 10,
    textAlign: 'center',
    fontSize: '0.85em',
    fontWeight: 'bold',
    border: 'none',
    color: 'white',
    textShadow: '2px 2px black'

  };

  return (
    <div style={buttonDivStyles}>
      <button style={buttonStyles}>ORDER YOURS</button>
      <button style={buttonStyles}>NEW INVENTORY</button>
      <button style={buttonStyles}>USED INVENTORY</button>
      <button style={buttonStyles}>TEST DRIVE</button>
    </div>
  );
}

export default HomeButton;
