import {React, useState} from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { 
  createNewSite, 
  openHistoryProject, 
  deleteHistoryProject } from './../store/builderSlice'

//material ui imports
import {useStyles} from '../styles'
import AddIcon from '@material-ui/icons/Add';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import {
  Container, 
  Button, 
  Grid, 
  Paper,
  Divider} from '@material-ui/core';

//assets
import empty from'./../assets/empty.webp';


export default function Home() {
  const [siteName, setSiteName] = useState('')
  const classes = useStyles();
  const dispatch = useDispatch()
  const history = useSelector(state => state.builder.history)
  const redirectToBuilder = useHistory();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  

  const createSite = () => {
    //it's better make redirect in redux after action dispatching
    redirectToBuilder.push("/builder");
    dispatch(createNewSite(siteName))
  }

  const openProject = (id) => {
    dispatch(openHistoryProject(id))
    redirectToBuilder.push("/builder");
  }

  const deleteProject = (id) => {
    dispatch(deleteHistoryProject(id))
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
    
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            
            <Grid item xs={12} md={4} lg={3}>
            <h2>Create site!</h2>
              <Paper className={fixedHeightPaper}>
                <p>Enter your site name</p>
                <input onChange={e => setSiteName(e.target.value)}></input>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<AddIcon />}
                  onClick={createSite}
                  disabled={!siteName.length}
                >
                  Start Project
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <h2>History</h2>
              {history.length ? history.map(site => (
                <Paper className={fixedHeightPaper} key={site.id}>
                  <h2>{site.siteName}</h2>
                  <p>Saved at { moment(site.saveTime).format("HH:mm, dddd, Do MMMM YYYY") }</p>
                  <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  onClick={() => openProject(site.id)}
                >
                  open
                </Button>
                <Divider />
                <Divider />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  onClick={() => deleteProject(site.id)}
                >
                  delete
                </Button>
                </Paper>
              )) : <div className="empty-history">
                <img src={empty} alt="img-empty"></img>
                </div>
              }
            </Grid>
          </Grid>
          
        </Container>
      </main>
    </div>
  );
}