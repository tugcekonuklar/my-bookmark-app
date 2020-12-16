import { useState, useMemo } from 'react';
import LeftMenu from '../../component/left-menu/LeftMenu'
import TopBar from '../../component/top-bar/TopBar'
import BookMarkList from '../../component/bookmark-list/BookMarkList'
import TabMenu from '../../component/tab-menu/TabMenu'
import Grid from '@material-ui/core/Grid';
import './home.css'

const Home = () => {

    const [bookMarks, setBookMarks] = useState(["BookMark 1", "BookMark 2", "BookMark 3", "BookMark 4"]);
    const [searchedText, setSearchedText] = useState("");

    function handleChange(value) {
        setSearchedText(value);
    }

    const filteredBookMark = useMemo(() => {
        if (!bookMarks) return []
        return bookMarks.filter(bookMark => bookMark.toLocaleLowerCase().includes(searchedText.toLocaleLowerCase()));
    }, [bookMarks, searchedText])

    return (
        <div className="home-container-row">
            <Grid container direction="row"
                style={{height: "100%" }}
                justify="space-between"
                alignItems="flex-start" >
                <Grid item xs={12} sm={3} style={{ borderRight: "1px solid rgba(0, 0, 0, 0.12)", height: "auto" }}>
                    <LeftMenu />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <TopBar onChange={handleChange} />
                    <BookMarkList bookmarks={filteredBookMark}></BookMarkList>
                </Grid>
            </Grid>
        </div>

    )
}
export default Home;