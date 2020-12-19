import { useEffect } from 'react'
import { Avatar, Box, Button, Divider, Drawer, Hidden, List, Typography, makeStyles } from '@material-ui/core';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import NavItem from './NavItem'
import { Cloud, Folder, Hash } from 'react-feather';
import PropTypes from 'prop-types'

const user = {
    avatar: 'https://www.gravatar.com/avatar/e03e6801a0d1a11ab1472c1936279d9e?d=mm&amp;s=60',
    jobTitle: 'Senior Software Engineer',
    email: 'tkonuklar@gmail.com'
};

const collections = [
    // {
    //     href: "/app/home",
    //     icon: FolderPlus,
    //     title: "My Personal",
    //     count: 5
    // },
    // {
    //     href: "/app/addBookmark",
    //     icon: FolderPlus,
    //     title: "For Fun",
    //     count: 3
    // }
]

const tags = [
    {
        href: "/app/dashboard",
        icon: Hash,
        title: "personal",
        count: 12
    }
]

const useStyles = makeStyles((theme) => ({
    mobileDrawer: {
        width: 256
    },
    desktopDrawer: {
        width: 256,
        top: 64,
        height: 'calc(100% - 64px)'
    },
    avatar: {
        cursor: 'pointer',
        width: 64,
        height: 64
    }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
    const classes = useStyles();
    const location = useLocation();

    useEffect(() => {
        if (openMobile && onMobileClose) {
            onMobileClose();
        }
    }, [location.pathname]);

    const content = (<Box
        height="100%"
        display="flex"
        flexDirection="column"
    >
        <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            p={2}
        >
            <Avatar
                className={classes.avatar}
                component={RouterLink}
                src={user.avatar}
                to="/app/dashboard"
            />
            <Typography
                className={classes.name}
                color="textPrimary"
                variant="subtitle1"
            >
                {user.email}
            </Typography>
        </Box>
        <Divider />
        <Box p={2}>
            <NavItem
                title="All Bookmarks"
                count={5}
                icon={Cloud}
                href="/app/dashboard"
            />
            <NavItem
                title="Unsorted Bookmarks"
                count={5}
                icon={Folder}
                href="/app/addBookmark"
            />
            {collections.length > 0 &&
                (<Typography
                    className={classes.name}
                    color="textPrimary"
                    variant="body1"
                >My Collections</Typography>)}

            <List>
                {collections.map(collection =>
                    <NavItem
                        title={collection.title}
                        key={collections.title}
                        count={collection.count}
                        href={collection.href}
                        icon={collection.icon}
                    />
                )}
            </List>
            {tags.length > 0 &&
                <Typography
                    className={classes.name}
                    color="textPrimary"
                    variant="body1"
                >My Tags</Typography>}
            <List>
                {tags.map(tag =>
                    <NavItem
                        title={tag.title}
                        count={tag.count}
                        key={tag.title}
                        href={tag.href}
                        icon={tag.icon}
                    />
                )}
            </List>
        </Box>
        <Box flexGrow={1} />
        <Box m={3}  bgcolor="background.dark">
            <Button color="primary" variant="contained" style={{width: "100%"}}>
                SIGN OUT
            </Button>
        </Box>
    </Box>);

    return (
        <>
            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    classes={{ paper: classes.mobileDrawer }}
                    open={openMobile}
                    onClose={onMobileClose}
                    variant="temporary"
                >
                    {content}
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <Drawer
                    anchor="left"
                    classes={{ paper: classes.desktopDrawer }}
                    open
                    variant="persistent"
                >
                    {content}
                </Drawer>
            </Hidden>
        </>
    )
}
NavBar.propTypes = {
    onMobileClose: PropTypes.func,
    openMobile: PropTypes.bool
};

NavBar.defaultProps = {
    onMobileClose: () => { },
    openMobile: false
};

export default NavBar;