import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const CustomButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
        width: '100%'
    },
}))(Button);

const ColoredButton = (props) => {
   return (<CustomButton>
       {props.children}
   </CustomButton>)
}

export default ColoredButton;