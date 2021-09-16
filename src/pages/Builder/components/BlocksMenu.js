import {React, useState} from 'react'
import { useDispatch } from 'react-redux'
import { saveBlock, saveProject } from '../../../store/builderSlice'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),
  },
}));

export default function BlocksMenu () {
  const classes = useStyles()
  const dispatch = useDispatch()

  const saveProj = () => {dispatch(saveProject())}
  const [listAvailableBlocks, setListAvailableBlocks] = useState([
    {
      id: null,
      type: 'header',
      name: 'Заголовок'
    },
    {
      id: null,
      type: 'text',
      name: 'Текст'
    },
    {
      id: null,
      type: 'img',
      name: 'Изображение'
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
      {/* <div className={classes.toolbar} /> */}
      <Divider />
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
      variant="permanent"
      // classes={{
      //   paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      // }}
      // open={open}
      >
      {/* <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton onClick={handleDrawerOpen}>
          <ChevronLeftIcon />
        </IconButton>
      </div> */}
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

// const [open, setOpen] = React.useState(false);
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);