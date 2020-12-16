import { Link } from 'react-router-dom'
import PostAddIcon from '@material-ui/icons/PostAdd';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

const TopBar = (props) => {

  function onChange(e) {
    props.onChange(e.target.value)
  }

  return (
      <Grid container alignItems="flex-start" direction="row"
        style={{ width: '100%', minHeight: '60px', borderBottom: 'solid 1px rgb(227,227,228)', padding: '0 5px' }}>
        <Grid item xs={12} sm={11}>
          <Grid container alignItems="flex-end">
            <Grid item >
              <SearchIcon />
            </Grid>
            <Grid item xs>
              <TextField style={{ width: "95%" }} label="Search" onChange={onChange} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={1} >
          <Link to="/add-bookmark">
            <IconButton component="span"> <PostAddIcon fontSize="large" color="secondary" /></IconButton>
          </Link>
        </Grid>
      </Grid>
  )
}

export default TopBar;