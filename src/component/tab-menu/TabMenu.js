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
import IconLabel from '../icon-label/IconLabel';
import Typography from '@material-ui/core/Typography';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '100%',
    textTransform: "none",
  },
  tabs: {
    textTransform: 'none',
    "& .MuiTab-textColorInherit": {
      opacity: '1',
    },
    "& .Mui-selected" :{
      backgroundColor:'#f6f5f4'
    }
  },
  tab: {
    textTransform: 'none',
    maxWidth: '100%',
    alignItems: 'flex-start',
    "& .MuiTab-wrapper": {
      alignItems: 'flex-start',
    },
    "& .MuiGrid-spacing-xs-1":{
      paddingTop: '4px'
    }

  },
  tabTitle: {
    color: '#828282',
    padding: '10px'
  }
}));

export default function TabMenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab className={classes.tab} icon={<IconLabel text="All Bookmarks" icon={<CloudQueueIcon />} count="5" />} {...a11yProps(0)} selected="true" />
        <Tab className={classes.tab} icon={<IconLabel text="Unsorted Bookmarks" icon={<FolderOpenIcon />} count="5" />} {...a11yProps(1)} />
        <Typography className={classes.tabTitle} variant="h6" gutterBottom>My Collections</Typography>
        <Tab className={classes.tab} icon={<IconLabel text="My Personal Bookmark" icon={<FolderIcon />} count="1" />} {...a11yProps(3)} />
        <Typography className={classes.tabTitle} variant="h6" gutterBottom>My Tags</Typography>
        <Tab className={classes.tab} icon={<IconLabel text="personal" icon={<LabelOutlinedIcon />} count="1" />} {...a11yProps(4)} />
      </Tabs>
    </div>
  );
}
