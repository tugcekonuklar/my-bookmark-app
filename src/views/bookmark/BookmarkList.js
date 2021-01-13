import { Grid, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Bookmark from './Bookmark'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    root: {}
}));

const BookmarkList = ({ className, onDelete, bookmarks, ...rest }) => {
    const classes = useStyles();
    const bookmarkList = bookmarks.map((bookmark, index) => (
        <Grid
            item
            lg={2}
            sm={3}
            xl={2}
            xs={6}
            key={index}
        >
            <Bookmark
                id={index}
                title={bookmark.title}
                content={bookmark.content}
                tags={bookmark.tags}
                imageUrl={bookmark.image}
                url={bookmark.url}
                onDelete={onDelete} />
        </Grid>
    ));

    return (
        <div className={clsx(classes.root, className)} {...rest}>
            <Grid container spacing={2}>
            <Grid item style={{width: '100%' }}>
                    <Typography variant="subtitle1" style={{ color: '#808080', textAlign:'center' }}>{bookmarks.length} bookmarks </Typography>
                </Grid>
                <Grid item
                    container
                    spacing={3}
                >
                    {bookmarkList}
                </Grid>
            </Grid>
        </div >)

}

BookmarkList.propTypes = {
    className: PropTypes.string,
    bookmarks: PropTypes.array,
    onDelete: PropTypes.func,
}

export default BookmarkList; 
