import { Link } from 'react-router-dom'
import PostAddIcon from '@material-ui/icons/PostAdd';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import './top-bar.css';


const TopBar = (props) => {

  function onChange(e) {
    props.onChange(e.target.value)
  }

  return (<div className="top-bar-main-container">
    <div>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <SearchIcon />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Search" onChange={onChange} />
        </Grid>
      </Grid>
    </div>
    <div className="add-icon">
      <Link to="/add-bookmark">
        <PostAddIcon fontSize="large" style={{ fill: "black" }} />
      </Link>
    </div>
  </div >)
}

export default TopBar;