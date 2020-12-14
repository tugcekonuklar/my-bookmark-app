import { Link } from 'react-router-dom'
import PostAddIcon from '@material-ui/icons/PostAdd';
import './top-bar.css';

const TopBar = () => {

    return (<div className="top-bar-main-container">
        <h1>Search bar</h1>
        <Link>
          <PostAddIcon className="add-icon" fontSize="large" style={{fill: "black"}}/>
        </Link>
    </div>)
}

export default TopBar;