import { Card, CardContent, CardActionArea, CardActions, CardMedia, Box, Typography, makeStyles, IconButton } from '@material-ui/core'
import { Trash2 } from 'react-feather';
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Tag from './Tag'

const useStyles = makeStyles(() => (
    {
        root: {},
        media: {
            height: 100,
            // backgroundImage: `url(/static/undraw_not_found_60pq.svg)`
        },
        action: {
            backgroundColor: "#b4b4b421"
        }
    }
))

const Bookmark = ({ id, title, content, url,tags, imageUrl, className, onDelete, ...rest }) => {
    const classes = useStyles();
    const tagString = tags.map((tag, index) => (
        <Tag content={tag} key={index} />
    ));
    const DEFAULT_IMAGE = "/static/logo_fox_128.svg";

    return (
        <div className={clsx(classes.root, className)}
            {...rest}>
            <Card className={clsx(classes.root, className)} {...rest}>
                    <CardActionArea href={url} target="_blank">
                        <CardMedia
                            className={classes.media}
                            image={imageUrl ? imageUrl: DEFAULT_IMAGE}
                            component="img"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h6" noWrap>
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

Bookmark.propTypes = {
    id: PropTypes.number,
    className: PropTypes.string,
    content: PropTypes.string,
    title: PropTypes.string,
    tags: PropTypes.array,
    imageUrl: PropTypes.string,
    onDelete: PropTypes.func,
    url: PropTypes.string
}

export default Bookmark;