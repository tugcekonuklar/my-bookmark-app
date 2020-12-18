import { useEffect, useMemo ,useState} from 'react'
import { Container, Box, makeStyles } from '@material-ui/core'
import Page from '../../component/page/Page'
import PropType from 'prop-types'
import ToolBar from './ToolBar'
import BookmarkList from './BookmarkList'
import dummyData from './data'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}));



const Dashboard = ({ title }) => {
    const [bookmarks, setBookmarks] = useState(dummyData);
    const classes = useStyles();
    const [searchedText, setSearchedText] = useState("");

    const filteredBookMark = useMemo(() => {
        if (!bookmarks) return []
        if (!searchedText) return bookmarks
        return bookmarks.filter(bookmark => 
            bookmark.content.toLocaleLowerCase().includes(searchedText.toLocaleLowerCase())
            ||  bookmark.title.toLocaleLowerCase().includes(searchedText.toLocaleLowerCase())
        );
    }, [bookmarks, searchedText])

    function handleChange(value) {
        setSearchedText(value);
    }

    return (
        <Page
            className={classes.root}
            title={title}
        >
            <Container maxWidth={false}>
                <ToolBar onChange={handleChange}/>
                <Box mt={3}>
                    <BookmarkList bookmarks={filteredBookMark} />
                </Box>
            </Container>
        </Page>)

}

Dashboard.prototype = {
    title: PropType.string
}

export default Dashboard;