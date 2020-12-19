import { Grid, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Bookmark from './Bookmark'

const useStyles = makeStyles(() => ({
    root: {}
}));

const BookmarkList = ({ className, onDelete, bookmarks, ...rest }) => {
    const classes = useStyles();
    const bookmarkList = bookmarks.map((bookmark, index) => (
        <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
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

            <Grid
                container
                spacing={3}
            >
                {bookmarkList}
            </Grid>

        </div >)

}

BookmarkList.propTypes = {
    className: PropTypes.string,
    bookmarks: PropTypes.array,
    onDelete: PropTypes.func,
}

export default BookmarkList; 
