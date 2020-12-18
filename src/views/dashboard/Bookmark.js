import { Card, CardContent, CardActionArea, CardActions, CardMedia, Box, Typography, makeStyles, IconButton } from '@material-ui/core'
import { Trash2 } from 'react-feather';
import ProtoTypes from 'prop-types'
import clsx from 'clsx'
import Tag from './Tag'

const useStyles = makeStyles(() => (
    {
        root: {},
        media: {
            height: 100,
            backgroundImage: `url(/static/images/undraw_not_found_60pq.svg)`
        },
        action: {
            backgroundColor: "#b4b4b421"
        }
    }
))

const Bookmark = ({ id, title, content, tags, imageUrl, className, onDelete , ...rest }) => {
    const classes = useStyles();
    const tagString = tags.map((tag, index) => (
        <Tag content={tag} key={index} />
    ));
    

    return (
        <div className={clsx(classes.root, className)}
            {...rest}>
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
                        <Typography variant="body2" color="textSecondary" component="p" noWrap >
                            {content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.action}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" style={{ width: "100%" }} >
                        <Box pl={2} >
                            {tagString}
                        </Box>
                        <IconButton color="inherit" onClick={() => onDelete(id)}>
                            <Trash2 color="#0000008a" size="15px" />
                        </IconButton>
                    </Box>

                </CardActions>
            </Card>
        </div>)
}

Bookmark.prototypes = {
    id: ProtoTypes.number,
    className: ProtoTypes.string,
    content: ProtoTypes.string,
    title: ProtoTypes.string,
    tags: ProtoTypes.array,
    imageUrl: ProtoTypes.string,
    onDelete: ProtoTypes.func,
}

export default Bookmark;