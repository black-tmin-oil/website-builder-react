import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { saveBlockState} from '../../../../store/builderSlice'
import DeleteButton from './DeleteButton'

import Grid from '@material-ui/core/Grid';

export default function Header (props) {
  const dispatch = useDispatch()
  const {id} = props
  const [attributes, setAttributes] = useState(
    {
      field: 'title',
      value: '',
      default: 'Title',
    })

  // const blocks = useSelector(state => state.builder.current.blocks)

  // useEffect(() => {
  //   const blockDataInStore = blocks.find(e => e.id === props.id)
  //   if (blockDataInStore.attributes) {
  //     setAttributes(blockDataInStore.attributes)
  //     console.log("state after useEffect heppend", attributes)
  //   }
  // }, [attributes])
   
  const saveToStore = (data) => {
      setAttributes(attributes => ({
        ...attributes,
        value: data
      }));
      setAttributes(data)

      console.log('savetostore', attributes)
    }
    return (
      <>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
      
      </Grid>
      <DeleteButton id={id}/>
      </>
    )
  }
