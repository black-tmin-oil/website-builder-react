import {useStyles} from './../styles'
import empty from'./../assets/404.gif';
import Grid from '@material-ui/core/Grid';

export default function Error() {
    const classes = useStyles();
    return (
        <>
        <Grid container justify = "center">
        <div className={classes.appBarSpacer}>
          <img src={empty}></img>
          <p>Go home</p>
        </div>
        </Grid>
        </>
    )
}