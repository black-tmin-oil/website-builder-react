import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
//material ui
import { useStyles } from '../../../styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {Grid, Checkbox} from '@material-ui/core';
import Box from '@material-ui/core/Box';

//this project components
import BlocksMenu from './BlocksMenu';
import Text from './blocks/Text'
import Img from './blocks/Img'
import Header from './blocks/Header'

//assets
import start from './../../../assets/start.gif'
import desktop from './../../../assets/desktop.gif'


export default function Builder() {
  const classes = useStyles();
  const blocks = useSelector(state => state.builder.current.blocks)

  const[mobileStub, setMobileStub] = useState(0)
  const checkWindowWidth = () => {
    setMobileStub(!window.matchMedia('(min-width: 960px)').matches)
  }
  useEffect(() => {
    window.addEventListener('resize', checkWindowWidth)
  })

  //dinamicly render component
  const components = {
    text: Text,
    img: Img,
    header: Header
  };

  return ( mobileStub ? <div><h1>cant be used on mobile</h1><h1>cant be used on mobile</h1><img src={desktop} alt="desktop"></img></div> :

    <div className={classes.root}>
      <CssBaseline />
      <BlocksMenu />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={10}>
                    {blocks.length ? 
                    blocks.map(b => {
                  const Component = components[b.type];
                  return <Box  key={b.id} justifyContent="center" display="flex" sx={{ border: '1px dashed grey'}}><Component name={b.name} id={b.id}/></Box>
                }) : 
                <Box justifyContent="center" display="flex" >
                  <img src={start} alt="start"></img>
                  {/* <h2>start adding blocks</h2> */}
                </Box>
                }
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
    
  );
}





      

