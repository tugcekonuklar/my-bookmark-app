import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconLabel from '../icon-label/IconLabel'

const ProfileMenu = () => {

    return (
        <Grid container direction="row"
            spacing={2}
            alignItems="center"
            justify="space-between"
            style={{ padding: "10px" }} >
            <Grid item >
            <Avatar alt="Tugce Konuklar" src="https://www.gravatar.com/avatar/e03e6801a0d1a11ab1472c1936279d9e?d=mm&amp;s=60" />
            </Grid>
            <Grid item >
                <Typography variant="subtitle1" gutterBottom>
                    tkonuklar@gmail.com
                 </Typography>
            </Grid>
        </Grid>
    )
}

export default ProfileMenu;