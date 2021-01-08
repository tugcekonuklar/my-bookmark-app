import React from 'react';
import './title.css'

const Title = (props) => {
  return (
    <img
      className="title"
      alt="Title"
      src="/static/title.png"
      {...props}
    />
  );
};

export default Title;
