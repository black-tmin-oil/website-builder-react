import {useStyles} from './../styles'
import empty from'./../assets/404.gif';
import {
  Grid,
  Button} from '@material-ui/core';

export default function Error() {
    const classes = useStyles();
    return (
        <>
        <Grid container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center">
        <div className={classes.appBarSpacer}>
          <img src={empty}></img>
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          >Go home</Button>
        </Grid>
        </>
    )
}