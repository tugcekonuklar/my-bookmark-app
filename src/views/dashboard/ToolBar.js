import { Box, Card, Button, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
    root: {}
}));

const ToolBar = ({ className, ...rest }) => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, className)}
            {...rest}>
            <Box
                display="flex"
                justifyContent="flex-start"
            >
                <Button
                    color="primary"
                    variant="contained"
                > Add </Button>
            </Box>
        </div>

    )

}

ToolBar.propTypes = {
    className: PropTypes.string
}

export default ToolBar;