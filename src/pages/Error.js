import {useStyles} from './../styles'
import empty from'./../assets/404.gif';
import { useHistory } from "react-router-dom";
import {
  Grid,
  Button} from '@material-ui/core';

  
export default function Error() {
  const classes = useStyles();
  const redirectToHome = useHistory();
 
  const goHome = () => {
    redirectToHome.push("/home");
  }
  

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
        onClick={goHome}
        >Go home
        </Button>
      </Grid>
      </>
  )
}