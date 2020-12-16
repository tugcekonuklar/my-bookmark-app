import './bookmark-list.css'
import Grid from '@material-ui/core/Grid';

const BookMarkList = (props) => {

    const bookMarks = props.bookmarks.map((bookMark, index) =>
<div className="bookmark-inner-container"  key={index} id={index}> {bookMark}</div>
    );

    return (<div className="bookmark-main-container">
        {bookMarks}
        <div className="bookmark-footer">{bookMarks.length} bookmarks </div>
        </div>)
}

export default BookMarkList;