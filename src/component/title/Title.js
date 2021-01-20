import React from 'react';
import { makeStyles } from '@material-ui/core'
import Logo from '../../component/logo/Logo'

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "0.5fr 2fr",
    color: "white"
  }
}));

const Title = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Logo />
      <h1>My Bookmarks</h1>
    </div>
  );
};

export default Title;
