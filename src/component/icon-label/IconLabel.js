import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const IconLabel = (props) => {
    return (<Grid container direction="row"
        spacing={3}
        alignItems="center"
        justify="space-between"
        wrap="nowrap">

        <Grid item >
            <Grid container direction="row"
                spacing={1}
                alignItems="center"
                justify="flex-start"
                wrap="wrap" >
                <Grid item style={{ width: "40px", height: "40px" }}>
                    {props.icon}
                </Grid>
                <Grid item xs>
                    <Typography variant="subtitle1" gutterBottom>
                        {props.text}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item >
            <Typography variant="subtitle1" gutterBottom>
                {props.count}
            </Typography>
        </Grid>
    </Grid>)
}

export default IconLabel;