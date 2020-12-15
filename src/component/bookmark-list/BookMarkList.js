const BookMarkList = (props) => {

    const bookMarks = props.bookmarks.map((bookMark, index) =>
<div key={index} id={index}> {bookMark}</div>
    );

    return (<div>
        {bookMarks}
    </div>)
}

export default BookMarkList;