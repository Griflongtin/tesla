import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

function Nav(){
  const mainDivStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10
  };
  const divStyles = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'space-around'
  };
  const linkStyles = {
    textDecoration: 'none',
    color: 'white',
    padding: 5
  };

  return (
    <div style={mainDivStyles}>
      <div>
        <Link to="/"><Logo /></Link>
      </div>
      <div style={divStyles}>
        <Link to="/modelS" style={linkStyles}>MODEL S</Link>
        <Link to="/modelX" style={linkStyles}>MODEL X</Link>
        <Link to="/model3" style={linkStyles}>MODEL 3</Link>
        <Link to="/roadster" style={linkStyles}>ROADSTER</Link>
        <Link to="/energy" style={linkStyles}>ENERGY</Link>
      </div>
      <div>
        <Link to="/shop" style={linkStyles}>SHOP</Link>
        <Link to="/signIn" style={linkStyles}>SIGN IN</Link>
      </div>
    </div>
  );
}

export default Nav;
