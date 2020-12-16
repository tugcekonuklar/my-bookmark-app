import MenuLabel from '../menu-label/MenuLabel'
import ProfileMenu from '../profile-menu/ProfileMenu'
import ColoredButton from '../colored-button/ColoredButton'
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import FolderIcon from '@material-ui/icons/Folder';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import TabMenu from '../tab-menu/TabMenu'
import './left-menu.css'

const LeftMenu = (props) => {

    // const collections = props.collections.map(collection =>
    //     <MenuLabel title={collection.title} count={collection.count}><FolderIcon /></MenuLabel>);

    // const tags = props.tags.map(tag =>
    //     <MenuLabel title={tag.title} count={tag.count}><LabelIcon /></MenuLabel>);
    return (
        <Grid container direction="column">
            <Grid item>
                <ProfileMenu />
            </Grid>
            <Grid item>
                <TabMenu />
            </Grid>
            <Grid item>
                <ColoredButton>SIGN OUT</ColoredButton>
            </Grid>
        </Grid>
    )
}

export default LeftMenu;
