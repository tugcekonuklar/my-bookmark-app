import Grid from '@material-ui/core/Grid';

import './profile-menu.css'
const ProfileMenu = () => {

    return (
    <div className="profile-container">
        <Grid container spacing={2} alignItems="center" alignContent="space-between">
            <Grid item sx={6} sm={4}>
                <img className="avatar" src="https://www.gravatar.com/avatar/e03e6801a0d1a11ab1472c1936279d9e?d=mm&amp;s=60" />
            </Grid>
            <Grid item sx={6} sm={2}>
                <span>tkonuklar@gmail.com</span>
            </Grid>
        </Grid>
    </div>
    )
}

export default ProfileMenu;