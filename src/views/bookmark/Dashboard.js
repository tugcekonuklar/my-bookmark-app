import { useMemo, useState } from 'react'
import { Container, Box, makeStyles } from '@material-ui/core'
import Page from '../../component/page/Page'
import PropType from 'prop-types'
import ToolBar from './ToolBar'
import BookmarkList from './BookmarkList'
import dummyData from './data'
import urlMetadata from 'url-metadata';

// const CORS_ANYWHERE_URL = process.env.CORS_SERVER_URL ||  "https://my-cors-anywhere-server.herokuapp.com/";
const CORS_ANYWHERE_URL = "https://cors-anywhere.herokuapp.com/" ||  "https://my-cors-anywhere-server.herokuapp.com/";

const DEFAULT_IMAGE = "/static/logo_fox_128.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        //backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3),
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
            || bookmark.title.toLocaleLowerCase().includes(searchedText.toLocaleLowerCase()
            )
        );
    }, [bookmarks, searchedText])

    function handleChange(value) {
        setSearchedText(value);
    }

    function handleDelete(index) {
        const newArr = [...bookmarks];
        newArr.splice(index, 1);
        setBookmarks(newArr);
    }

    function handleCreate(bookmark) {
        loadMetaData(bookmark);
    }

    function loadMetaData(bookmark) {
        urlMetadata(CORS_ANYWHERE_URL + bookmark.url, { ensureSecureImageRequest: false }).then(
            function (metadata) {
                const bm = {
                    content: isEmpty(metadata.description) ?  "No Content" : metadata.description ,
                    tags: [bookmark.tag],
                    image: isValidUrl(metadata.image) ? metadata.image : DEFAULT_IMAGE,
                    title: metadata.title,
                    id: Math.floor(Math.random() * 100) + 7,
                    url: bookmark.url
                }
                bookmarks.unshift(bm);
                setBookmarks([...bookmarks])
            },
            function (error) { // failure handler
                console.error(error)
            })
    }

    function isValidUrl(url){
        if(url){
            if(url.startsWith("http")){
                return true
            }
        }
        return false;
    }

    function isEmpty(value){
        debugger;
        if(!!value){
            return false
        }
        return true;
    }

    return (
        <Page
            className={classes.root}
            title={title}
        >
            <Container maxWidth={false}>
                <ToolBar onChange={handleChange} onCreate={handleCreate} />
                <Box mt={3}>
                    <BookmarkList bookmarks={filteredBookMark} onDelete={handleDelete} />
                </Box>
            </Container>
        </Page>)

}

Dashboard.propTypes = {
    title: PropType.string
}

export default Dashboard;