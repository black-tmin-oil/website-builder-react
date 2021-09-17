import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

//useSryle in other file
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // toolbar: {
  //   paddingRight: 24, // keep right padding when drawer closed
  // },
  toolbar: theme.mixins.toolbar,

  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
    // alignItems: 'center',
    transition: theme.transitions.create(['width', 'margin'],{
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    textAlign: "right"
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },

  // appBar: {
  //   position: 'relative',
  //   zIndex: theme.zIndex.drawer + 1,
  // },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export { useStyles };