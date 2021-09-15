import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';

import { useSelector, useDispatch } from 'react-redux'
import { createNewSite, saveBlock } from './store/builderSlice'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
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
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
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

export default function Start () {
  // const [data, setData] = useState({
  //   siteName: '',
  //     listIcons: [
  //       'semantic-web',
  //       'spider-web',
  //       'search-web',
  //       'web',
  //       'webhook',
  //       'webpack'
  //     ]
  // })

  const [data, setData] = React.useState({
    siteName: '',
  })

  const dispatch = useDispatch()
  const createSite = () => {dispatch(createNewSite("Newsite"))}
  const openSavedProject = () => {}
  const deleteProject = () => {}
  // const openSavedProject = () => {dispatch(OPEN_HISTORY_PROJECT("Newsite"))}
  // const deleteProject = () => {dispatch(DELETE_HISTORY_PROJECT("Newsite"))}

  const history = useSelector(state => state.builder.current.history)

  
  // const randomInteger = () => {
  //   const min = 0
  //   const max = 5

  //   const rand = min + Math.random() * (max - min)
  //   return Math.round(rand)
  // }

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
    
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <p>Enter ur site name</p>
                <input></input>
                <button disabled={!data.siteName} onClick={createNewSite}>start creating site</button>
              </Paper>
            </Grid>
            {/* поместить в отдельный грид для блоков хистори */}
            <Grid item xs={12} md={4} lg={3}>

              {history.length ? history.map(site => (
                <Paper className={fixedHeightPaper} key={site.id}>
                  <p>{site.name}</p>
                  <icon></icon>
                  {/* <p>Saved at { site.saveTime | moment("HH:mm, dddd, Do MMMM YYYY") }</p> */}
                  <p>Saved at { site.saveTime }</p>
                  <button>open</button>
                  <button >delete</button>
                </Paper>
              )) : <div className="empty-history">
                <p>there is no saved sites</p>
                <img src="" alt="img-empty"/>
                </div>
              }

              <Paper className={fixedHeightPaper}>
                <p>History</p>
                <button >delete site from history</button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

{/* <template lang="pug">
.container
  p.c-title Новый сайт
  .c-card
    b-field(label="Название сайта")
      b-input(v-model.trim="siteName")
    b-button(
      @click.native="CREATE_NEW_SITE(siteName)"
      type="is-success"
      :disabled="!siteName"
      ref="button-create"
    ) Начать проектирование

  p.c-title История
  template(v-if="history.length")
    .c-card(
      v-for="site in history"
      :key="site.id"
    )
      b-icon(
        :icon="listIcons[randomInteger()]"
        size="is-large"
        v-once
      )
      p.site-title {{ site.siteName }}
      p.site-time Сохранено в {{ site.saveTime | moment("HH:mm, dddd, Do MMMM YYYY") }}
      .buttons
        b-button(
          type="is-success"
          @click.native="OPEN_HISTORY_PROJECT(site.id)"
          ref="button-open"
        ) Открыть
        b-button(
          type="is-danger"
          @click.native="DELETE_HISTORY_PROJECT(site.id)"
          ref="button-delete"
        ) Удалить
  .history-empty(v-else)
    figure.image.is-4by3
      img(
        src="@/assets/empty.svg"
        alt="img-empty"
      )
    p Сейчас у вас нет сохранённых сайтов
</template>


<style lang="sass" scoped>
div.container
  padding: 0 10px
p.c-title
  font-size: 20px
  font-weight: 500
  margin-bottom: 20px

div.c-card
  padding: 30px
  border: 1px solid $color-alt-opacity
  box-shadow: 5px 5px 10px 0 rgba(0,0,0,.1)
  border-radius: 6px
  min-width: 300px
  max-width: 400px
  width: 100%
  margin: 0 0 30px 0
  display: inline-block
  vertical-align: top
  @media (min-width: $display-bp-mobile)
    margin: 0 30px 30px 0
  span.icon
    display: block
    margin: -10px auto 30px
  button.button, .buttons
    margin-top: 10px
  p.site-title
    font-size: 18px
    font-weight: 500
  p.site-time
    color: $color-alt

div.history-empty
  max-width: 450px
  text-align: center
  margin: auto
  p
    margin: 20px 0
</style> */}