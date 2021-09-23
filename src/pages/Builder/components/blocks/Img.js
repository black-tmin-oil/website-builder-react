import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { saveBlockState } from '../../../../store/builderSlice'
import {useState, useEffect} from 'react'
import DeleteButton from './DeleteButton'
import {
  Grid, 
  Fab, 
  CardActionArea, 
  CardContent} from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { useStyles } from '../../../../styles'

export default function Img(props) {
    const {id} = props
    const classes = useStyles();
  
    const blocks = useSelector(state => state.builder.current.blocks)

    const dispatch = useDispatch()
    const [attributes, setAttributes] = useState([{
      fileBase64: null
    }]);

    useEffect(() => {
      const blockDataInStore = blocks.find(e => e.id === props.id)
      if (blockDataInStore.attributes) {
        setAttributes(blockDataInStore.attributes)
      }
    })

    async function fileHandler(input) {
        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file.target.files[0])
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error)})

        const result = await toBase64(input).catch(e => Error(e))
        
        if (result instanceof Error) {
          // setAttributes({...attributes, isError: true})
          console.log('error happend during file upload') 

        } else {
          setAttributes(attributes[0].fileBase64 = result) 
        }
        dispatch(saveBlockState({id: props.id, attributes: attributes})) 
      }
    

    const renderInitialState = () => {
      return (
        <React.Fragment>
          <CardContent>
            <Grid container justify="center" alignItems="center">
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={fileHandler}
              />
              <label htmlFor="contained-button-file">
                <Fab component="span" className={classes.button}>
                  <AddPhotoAlternateIcon />
                </Fab>
              </label>
              
            </Grid>
            <div className="imgBoxDescription">
              <p>Click to select an image on the computer.</p>
              <p> Accepted formats: <strong>JPEG/JPG, PNG.</strong></p>
            </div>
          </CardContent>
        </React.Fragment>
      );
    }

    const renderUploadedState = () => {
      return (
        <React.Fragment>
          <CardActionArea>
            <img
              width="100%"
              className={classes.media}
              src={attributes[0].fileBase64}
            />
          </CardActionArea>
          

        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div className={classes.root}>
            {attributes[0].fileBase64 == null ? renderInitialState() : renderUploadedState()}
        </div>
        <DeleteButton id={id}/>
      </React.Fragment>
    );
}



