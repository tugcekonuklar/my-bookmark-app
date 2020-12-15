import './bookmark-list.css'

const BookMarkList = (props) => {

    const bookMarks = props.bookmarks.map((bookMark, index) =>
<div className="bookmark-inner-container"  key={index} id={index}> {bookMark}</div>
    );

    return (<div className="bookmark-main-container">
        {bookMarks}
        <div className="bookmark-footer">{props.count} bookmarks </div>
        </div>)
}

export default BookMarkList;