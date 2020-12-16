import { useState, useMemo } from 'react';
import LeftMenu from '../../component/left-menu/LeftMenu'
import TopBar from '../../component/top-bar/TopBar'
import BookMarkList from '../../component/bookmark-list/BookMarkList'
import TabMenu from '../../component/tab-menu/TabMenu'
import Grid from '@material-ui/core/Grid';

const Home = () => {

    const [bookMarks, setBookMarks] = useState(["BookMark 1", "BookMark 2", "BookMark 3", "BookMark 4","BookMark 5"]);
    const [searchedText, setSearchedText] = useState("");

    function handleChange(value) {
        setSearchedText(value);
    }

    const filteredBookMark = useMemo(() => {
        if (!bookMarks) return []
        return bookMarks.filter(bookMark => bookMark.toLocaleLowerCase().includes(searchedText.toLocaleLowerCase()));
    }, [bookMarks, searchedText])

    return (
        <Grid container direction="row"
            style={{ height: "100%"}}
            justify="space-between"
            alignItems="flex-start" >
            <Grid item style={{display: 'flex'}}>
                <LeftMenu />
            </Grid>
            <Grid item sm>
                <TopBar onChange={handleChange} />
                <BookMarkList bookmarks={filteredBookMark}></BookMarkList>
            </Grid>
        </Grid>
    )
}
export default Home;