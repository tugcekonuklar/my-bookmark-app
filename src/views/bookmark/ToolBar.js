import { useState , useRef} from 'react'
import { Box, Card, Popover, TextField, InputAdornment, SvgIcon, Fab, makeStyles, CardContent } from '@material-ui/core'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Search as SearchIcon } from 'react-feather';
import AddIcon from '@material-ui/icons/Add';
import SubmitForm from './SubmitForm';

const useStyles = makeStyles(() => ({
    root: {},
    search: {
        "& .MuiBox-root": {
            width: '90%'
        }
    },
    content: {
        // background: '#F3F3ED'
    },
    primaryButton:{
        backgroundColor: '#F9AA33',
        '& .MuiFab-secondary:hover':{
            backgroundColor:'#ef6c00'
        }
    }
}));

const ToolBar = ({ className, onChange, onCreate, ...rest }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const nodeRef = useRef(null)

    function onChangeAction(e) {
        onChange(e.target.value)
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopOver = () => {
        setAnchorEl(null);
    }

    const handleCreate = (bookmark) => {
        onCreate(bookmark);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={clsx(classes.root, className)}
            {...rest}>
            <Box>
                <Card>
                    <CardContent className={classes.content}>
                        <Box display="flex"
                            justifyContent="space-between"
                            className={classes.search}>
                            <Box maxWidth={500} mt={2} >
                                <TextField
                                    fullWidth
                                    placeholder="Search"
                                    onChange={onChangeAction}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SvgIcon
                                                    fontSize="small"
                                                    color="action"
                                                >
                                                    <SearchIcon />
                                                </SvgIcon>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Box>
                            <Fab
                                className={classes.primaryButton}
                                color="secondary"
                                aria-describedby={id}
                                aria-label="add"
                                // variant="extended"
                                onClick={handleClick}>
                                <AddIcon />
                                {/* Add Bookmark */}
                            </Fab>
                            <Popover
                            disableStrictModeCompat
                                style={{ marginTop: "5px" }}
                                id={id}
                                ref={nodeRef}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClosePopOver}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <Box minWidth={300}>
                                    <SubmitForm onCreate={handleCreate} onClosePopup={handleClosePopOver}/>
                                </Box>
                            </Popover>
                        </Box>
                    </CardContent>
                </Card>
            </Box>

        </div >
    )

}

ToolBar.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    onCreate: PropTypes.func
}

export default ToolBar;