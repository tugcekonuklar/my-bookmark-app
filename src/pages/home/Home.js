import {useState, useMemo}  from 'react';
import MenuSlider from '../../component/menu-slider/MenuSlider'
import TopBar from '../../component/top-bar/TopBar'
import BookMarkList from '../../component/bookmark-list/BookMarkList'

const Home = () => {

    const [bookMarks, setBookMarks] = useState(["BookMark 1", "BookMark 2", "BookMark 3", "BookMark 4"]);
    const [searchedText, setSearchedText] = useState("");

    function handleChange (value){
        setSearchedText(value);
    }

    const filteredBookMark = useMemo(()=>{
        if (!bookMarks) return []
        return bookMarks.filter(bookMark => bookMark.toLocaleLowerCase().includes(searchedText.toLocaleLowerCase()));
    },[bookMarks,searchedText])

    return (
        <div className="container-row">
            <MenuSlider total={5} unsorted={5} />
            <div className="container-column">
                <TopBar onChange={handleChange}/>
                <BookMarkList bookmarks={filteredBookMark} count={bookMarks.length}></BookMarkList>
            </div>
        </div>
    )
}
export default Home;