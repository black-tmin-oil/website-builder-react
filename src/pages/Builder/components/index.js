import React from 'react';
import { useSelector } from 'react-redux'
//material ui
import { useStyles } from '../../../styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

//this project components
import BlocksMenu from './BlocksMenu';
import Text from './blocks/Text'
import Img from './blocks/Img'
import Header from './blocks/Header'
import Setka from './Grid'

//assets
import start from './../../../assets/start.svg'
import desktop from './../../../assets/desktop.svg'


export default function Builder() {
  const classes = useStyles();
  const blocks = useSelector(state => state.builder.current.blocks)

  //dinamicly render component
  const components = {
    text: Text,
    img: Img,
    header: Header
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <BlocksMenu />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                    {blocks.length ? blocks.map(b => {
                  const Component = components[b.type];
                  return <div key={b.id}><Component name={b.name} id={b.id}/></div>;
                }) : <img src={start} alt="start"></img>}
            </Grid>
            <Setka />
          </Grid>
        </Container>
      </main>
    </div>
  );
}

