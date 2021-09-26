import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
//material ui
import { useStyles } from '../../../styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {Grid} from '@material-ui/core';
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
  const[mobileStub, setMobileStub] = useState(0)
  const classes = useStyles();
  const blocks = useSelector(state => state.builder.current.blocks)

  
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

  return ( mobileStub ? <div>
    <img src={desktop} alt="desktop"></img>
    <p style={{textAlign: 'center'}}>cant be used on mobile</p>
    </div> :

    <div className={classes.root}>
      <CssBaseline />
      <BlocksMenu />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={10}>
                    {blocks.length ? 
                    blocks.map(block => {
                  const Component = components[block.type];
                  return <Box  key={block.id} justifyContent="center" display="flex" sx={{ border: '1px dashed grey'}}><Component name={block.name} id={block.id}/></Box>
                }) : 
                <Box justifyContent="center" display="flex" >
                  <img src={start} alt="start"></img>
                </Box>
                }
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
    
  );
}





      

