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
    const classes = useStyles();
    return (
        <Page
            className={classes.root}
            title={title}
        >
            <Container maxWidth={false}>
                <ToolBar />
                <Box mt={3}>
                    <BookmarkList bookmarks={dummyData}/>
                </Box>
            </Container>
        </Page>)

}

Dashboard.prototype = {
    title: PropType.string
}

export default Dashboard;