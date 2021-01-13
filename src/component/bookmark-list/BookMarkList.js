import BookMark from '../bookmark/Bookmark'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const BookMarkList = (props) => {

    const bookMarks = props.bookmarks.map((bookMark, index) =>
        (<Grid item key={index} style={{ padding:'10px'}}>
            <BookMark  id={index} content={bookMark} />
        </Grid>)
    );

    return (
        <Grid container alignContent="center" direction="row" justify="space-between">
            <Grid container alignContent="center" direction="row">
                {bookMarks}
                <Grid item xs style={{width:'100%'}}>
                <Typography variant="subtitle1" style={{color: '#808080'}}>{props.bookmarks.length} bookmarks </Typography>
            </Grid>
            </Grid>
           
        </Grid>
    )
}

export default BookMarkList;