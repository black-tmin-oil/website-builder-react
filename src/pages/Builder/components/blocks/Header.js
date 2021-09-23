import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { saveBlockState} from '../../../../store/builderSlice'
import DeleteButton from './DeleteButton'

import EditableLabel from 'react-inline-editing';

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
      <div>
        {/* <EditableLabel text={ attributes.value || attributes[0].default} */}
        <EditableLabel text={ attributes.value || 'fuck'}
            labelFontWeight='bold'
            labelFontSize="20px"
            inputMaxLength="50"
            // onFocus={saveToStore}
            onFocusOut={saveToStore}
            // onFocusOut={() => dispatch(saveBlockState({id: id, attributes: attributes}))}
        />
      </div>
      {/* <div>
        <EditableLabel text='Subtitle'
            onFocusOut={saveToStore}
        />
      </div> */}
      </Grid>
      <DeleteButton id={id}/>
      </>
    )
  }
