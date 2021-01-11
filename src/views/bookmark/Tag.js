import { Box, Typography, makeStyles } from '@material-ui/core'
import { Hash } from 'react-feather';
import ProtoTypes from 'prop-types'
import clsx from 'clsx'

const useStyles = makeStyles(() => (
    {
        root: {}
    }
))

const Tag = ({ className, content, ...rest }) => {
    const classes = useStyles();
    return (
        <div className={clsx(classes.root, className)}
            {...rest}>
            <Box
                className={clsx(classes.root, className)}
                {...rest}
                display="flex"
                alignItems="center"
                justifyContent="space-between">
                <Hash size="15px" color="#0000008a" />
                <Typography variant="caption" color="textSecondary" >
                    <pre style={{ fontFamily: 'inherit' }}>
                        {content}
                    </pre>
                </Typography>
            </Box>
        </div>)
}

Tag.prototypes = {
    className: ProtoTypes.string,
    content: ProtoTypes.string,
}

export default Tag;