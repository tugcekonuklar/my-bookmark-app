import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import FolderIcon from '@material-ui/icons/Folder';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ProfileMenu from '../profile-menu/ProfileMenu'
import ColoredButton from '../colored-button/ColoredButton'

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    minWidth: '300px',
    textTransform: "none",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    textTransform: 'none'
  },
  tab: {
    textTransform: 'none',
    maxWidth: '100%',
    alignItems: 'flex-start',
    "& .MuiTab-wrapper": {
      alignItems: 'flex-start',
    },
    "& .MuiTab-textColorInherit": {
      opacity: '1',
    }
   
  },
}));

export default function TabMenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <ProfileMenu/>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {/* <Tab className={classes.tab} icon={<ProfileMenu/>} {...a11yProps(0)} /> */}
        <Tab className={classes.tab}  label="Item one" {...a11yProps(0)} />
        <Tab className={classes.tab}  label="Item Two" {...a11yProps(1)} selected="true"/>
        <Tab className={classes.tab}  label="Item Three" {...a11yProps(2)} />
        <Tab className={classes.tab}  label="Item Four" {...a11yProps(3)} />
        <Tab className={classes.tab}  label="Item Five" {...a11yProps(4)} />
        <Tab className={classes.tab}  label="Item Six" {...a11yProps(5)} />
        <Tab className={classes.tab}  label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <ColoredButton>SIGN OUT</ColoredButton>
    </div>
  );
}
