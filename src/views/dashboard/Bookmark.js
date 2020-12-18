import { Card, CardContent, CardActionArea, CardActions, CardMedia, Box, Typography, makeStyles, IconButton } from '@material-ui/core'
import { Trash2, Hash } from 'react-feather';
import ProtoTypes from 'prop-types'
import clsx from 'clsx'
import Tag from './Tag'

const useStyles = makeStyles(() => (
    {
        root: {},
        media: {
            height: 100,
        },
        action: {
            backgroundColor: "#b4b4b421"
        }
    }
))

const Bookmark = ({ title, content, tags, imageUrl, className, ...rest }) => {
    const classes = useStyles();
    const tagString = tags.map((tag, index) => (
        <Tag content={tag} key={index} />
    ));
    return (
        <Card className={clsx(classes.root, className)} {...rest}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" noWrap>
                        {content}
                    </Typography>
                    <Box
                        mt={2}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                    > {tagString}
                    </Box>

                </CardContent>
            </CardActionArea>
            <CardActions className={classes.action}>
                <Box display="flex" justifyContent="flex-end" alignItems="center" style={{ width: "100%" }} >
                    <IconButton color="inherit">
                        <Trash2 color="#0000008a" size="15px" />
                    </IconButton>
                </Box>

            </CardActions>
        </Card>)
}

Bookmark.prototypes = {
    className: ProtoTypes.string,
    content: ProtoTypes.string,
    title: ProtoTypes.string,
    tags: ProtoTypes.array,
    imageUrl: ProtoTypes.string
}

export default Bookmark;