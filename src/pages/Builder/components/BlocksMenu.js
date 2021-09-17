import {React, useState} from 'react'
import { useDispatch } from 'react-redux'
import { saveBlock, saveProject } from '../../../store/builderSlice'

import { useStyles } from './../../../styles'
import {
  Drawer, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Toolbar,
  Button }from '@material-ui/core';

import Snackbar from '@material-ui/core/Snackbar';
import MailIcon from '@material-ui/icons/Mail';
import SaveIcon from '@material-ui/icons/Save';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function BlocksMenu () {
  const classes = useStyles()
  const dispatch = useDispatch()
  
  const saveProj = () => {
    dispatch(saveProject())
  }


  const [listAvailableBlocks, setListAvailableBlocks] = useState([
    {
      id: null,
      type: 'header',
      name: 'Header'
    },
    {
      id: null,
      type: 'text',
      name: 'Text'
    },
    {
      id: null,
      type: 'img',
      name: 'Image'
    }])

  const addUniqueId = (b) => {
    setListAvailableBlocks(listAvailableBlocks.map(e => {
      e.id = Math.random().toString(36).substring(7)
      return Object.assign({}, e)
    }))
    dispatch(saveBlock(b))
  }


  const blocks = (
    <div>
      {/* <Toolbar /> */}
      <Toolbar><GitHubIcon /><p>v. 0.0.1</p></Toolbar>
      <Divider />
      <div className={classes.drawerContainer} />
      <List>
        {listAvailableBlocks.map((b) => (
          <ListItem button key={b.type}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary={b.name} onClick={()=> addUniqueId(b)}/>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </div>
  );

  return (
      <>
        <Drawer 
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        >
          <Divider />
            {blocks}
          <Divider />
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={saveProj}
          >
            Save Project
          </Button>
          
      </Drawer>
      </>
  );
}




