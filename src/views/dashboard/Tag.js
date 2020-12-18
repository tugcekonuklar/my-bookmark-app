import { Box, Typography, makeStyles, IconButton } from '@material-ui/core'
import { Hash } from 'react-feather';
import ProtoTypes from 'prop-types'
import clsx from 'clsx'

const useStyles = makeStyles(() => (
    {
        root: {}
    }
))

const Tag = ({className, content, ...rest}) => {
    const classes = useStyles();
    return (<Box className={clsx(classes.root, className)} {...rest} display="flex" alignItems="center">
        <Hash size="12px" color="#0000008a" />
        <Typography variant="caption" color="textSecondary" component="p" noWrap>
            {content}
        </Typography>
    </Box>)
}

Tag.prototypes = {
    className: ProtoTypes.string,
    content: ProtoTypes.string,
}

export default Tag;