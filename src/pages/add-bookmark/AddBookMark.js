import Page from '../../component/page/Page'
import {Box, Container,makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
    }
  }));

const AddBookMark = () => {
    const classes = useStyles();
    return (
        <Page
          className={classes.root}
          title="Add Bookmart"
        >
          <Container maxWidth={false}>
          
            <Box mt={3}>
                <h1>Add Book Mark</h1>
            </Box>
          </Container>
        </Page>
      );
}

export default AddBookMark;