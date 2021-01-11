import React from 'react';
import './logo.css'

const Logo = (props) => {
  return (
    <img
      className="logo"
      alt="Logo"
      src="/static/logo1.svg"
      {...props}
    />
  );
};

export default Logo;
