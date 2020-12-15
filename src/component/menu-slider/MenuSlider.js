import MenuLabel from '../menu-label/MenuLabel'
import ProfileMenu from '../profile-menu/ProfileMenu'
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import FolderIcon from '@material-ui/icons/Folder';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import AddIcon from '@material-ui/icons/Add';
import './menu-slider.css'

const MenuSlider = (props) => {

    // const collections = props.collections.map(collection =>
    //     <MenuLabel title={collection.title} count={collection.count}><FolderIcon /></MenuLabel>);

    // const tags = props.tags.map(tag =>
    //     <MenuLabel title={tag.title} count={tag.count}><LabelIcon /></MenuLabel>);


    return (<div className="slider-container">
        <ProfileMenu/>
        <MenuLabel title="All Bookmarks" count={props.total}><CloudQueueIcon /></MenuLabel>
        <MenuLabel title="Unsorted Bookmarks" count={props.unsorted}><FolderOpenIcon /></MenuLabel>
        <div className="menu-slider-collection-container">
            <h4 className="menu-slider-title">My Collections</h4>
            <AddIcon />
        </div>
        <MenuLabel title="My Collection baby" count={0}><FolderIcon /></MenuLabel>
        <h4 className="menu-slider-title">My Tags</h4>
        <MenuLabel title="My tags baby" count={0}><LabelOutlinedIcon /></MenuLabel>
    </div>)
}

export default MenuSlider;