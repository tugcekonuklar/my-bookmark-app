import { useState } from 'react'
import {
  AppBar, Badge, Box, Hidden, IconButton,Button, Toolbar, makeStyles
} from '@material-ui/core'
import clsx from 'clsx'
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Title from '../../component/title/Title'
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles(() => ({
  root: {
    background: '#4A6572'
    //background : 'rgb(185, 230, 235)'
    //  background : '#8bc34a'
    // background : '#00c4cc'
  },
  avatar: {
    height: 60,
    width: 60
  }, 
  logo:{
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "0.5fr 2fr"
  }
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const [notifications] = useState([1, 2]);

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
            <Title />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          {/* <IconButton color="inherit">
                <Badge
                  badgeContent={notifications.length}
                  color="secondary"
                  variant="dot"
                >
                  <NotificationsIcon />
                </Badge>
              </IconButton> */}
          <Button color="inherit" aria-label="Sign out" endIcon={<InputIcon />}>
           Sign Out
          </Button>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Toolbar.prototype = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
}

export default TopBar;