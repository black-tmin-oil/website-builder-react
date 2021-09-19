import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import {useStyles} from '../styles'

export default function TopBar () {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography component="h1" variant="h6" color="inherit" className={classes.title} noWrap>
          Site Builder
        </Typography>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          href="https://github.com/anna-vodimed"
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )

}
