import {React, useState} from 'react'
import { useDispatch } from 'react-redux'
import { saveBlock, saveProject } from '../../../store/builderSlice'

import { useStyles } from '../../../styles'
import {
  Drawer, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Toolbar,
  Button }from '@material-ui/core';


import SaveIcon from '@material-ui/icons/Save';

import ImageIcon from '@material-ui/icons/Image';
import TextFieldsIcon from '@material-ui/icons/TextFields';
// import SegmentIcon from '@material-ui/icons/Segment';

export default function BlocksMenu () {
  const classes = useStyles()
  const dispatch = useDispatch()
  
  const saveSite = () => {
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

  const addUniqueId = (block) => {
    setListAvailableBlocks(listAvailableBlocks.map(e => {
      e.id = Math.random().toString(36).substring(7)
      return Object.assign({}, e)
    }))
    dispatch(saveBlock(block))
  }


  const blocks = (
    <div>
      <Toolbar></Toolbar>
      <Divider />
      <div className={classes.drawerContainer} />
      <List>
        {listAvailableBlocks.map((block) => (
          <ListItem button key={block.type}>
            <ListItemIcon><TextFieldsIcon /></ListItemIcon>
            <ListItemText primary={block.name} onClick={()=> addUniqueId(block)}/>
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
            onClick={saveSite}
          >
            Save Project
          </Button>
          
      </Drawer>
      </>
  );
}




