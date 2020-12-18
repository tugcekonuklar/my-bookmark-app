import { Box, Card, Button, TextField, InputAdornment, SvgIcon, Fab, makeStyles, CardContent } from '@material-ui/core'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Search as SearchIcon } from 'react-feather';
import AddIcon from '@material-ui/icons/Add';
import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles(() => ({
    root: {},
    content: {
        '& .MuiCardContent-root': {
            paddingBottom: "100px",
            backgroundColor: "pink"
        }
    }
}));



const ToolBar = ({ className, onChange, ...rest }) => {
    const classes = useStyles();

    function onChangeAction(e) {
        onChange(e.target.value)
      }

    return (
        <div className={clsx(classes.root, className)}
            {...rest}>
            <Box>
                <Card>
                    <CardContent className={classes.content}>
                        <Box display="flex"
                            justifyContent="space-between">
                            <Box maxWidth={500} mt={2}>
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
                            <Fab color="secondary" aria-label="add">
                                <PostAddIcon />
                            </Fab>

                        </Box>

                    </CardContent>
                </Card>
            </Box>

        </div>
    )

}

ToolBar.propTypes = {
    className: PropTypes.string
}

export default ToolBar;