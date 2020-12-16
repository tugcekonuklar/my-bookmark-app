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
import './left-menu.css'

const LeftMenu = (props) => {

    // const collections = props.collections.map(collection =>
    //     <MenuLabel title={collection.title} count={collection.count}><FolderIcon /></MenuLabel>);

    // const tags = props.tags.map(tag =>
    //     <MenuLabel title={tag.title} count={tag.count}><LabelIcon /></MenuLabel>);


    return (<div className="slider-container">
        <ProfileMenu />
        <div className="slider-inner-container">
            <MenuLabel title="All Bookmarks" count={props.total}><CloudQueueIcon /></MenuLabel>
            <MenuLabel title="Unsorted Bookmarks" count={props.unsorted}><FolderOpenIcon /></MenuLabel>
            <div className="menu-slider-collection-container">
                <h4 className="menu-slider-title">My Collections</h4>
                <IconButton><AddIcon /></IconButton>
            </div>
            <MenuLabel title="My Collection baby" count={0}><FolderIcon /></MenuLabel>
            <h4 className="menu-slider-title">My Tags</h4>
            <MenuLabel title="My tags baby" count={0}><LabelOutlinedIcon /></MenuLabel>
            <div className="sign-out-button">
                <ColoredButton>SIGN OUT</ColoredButton>
            </div>
        </div>

    </div>)
}

export default LeftMenu;