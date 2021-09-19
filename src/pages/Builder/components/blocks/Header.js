import { useState } from "react"
import { useDispatch } from 'react-redux'
import { saveBlockState} from '../../../../store/builderSlice'
import DeleteButton from './DeleteButton'

import EditableLabel from 'react-inline-editing';

import Grid from '@material-ui/core/Grid';

export default function Header (props) {
  const dispatch = useDispatch()
  const {id} = props
  const [attributes, setAttributes] = useState([
    {
      field: 'title',
      value: null,
      default: 'Title',
    },
    {
      field: 'subtitle',
      value: null,
      default: 'Subtitle',
    }
])
   
    function saveToStore(data) {
      setAttributes(prevState => ({
          ...prevState,           // copy all other field/objects
          [0]: {              // recreate the object that contains the field to update
            ...prevState[0], // copy all the fields of the object
            value: data    // overwrite the value of the field to update
          }
      }));
      dispatch(saveBlockState({id: id, attributes: attributes[0]}))
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
        <EditableLabel text={ attributes[0|.value || attributes[0].default}
            labelFontWeight='bold'
            labelFontSize="20px"
            inputMaxLength="50"
            onFocusOut={saveToStore}
        />
      </div>
      <div>
        <EditableLabel text='Subtitle'
            onFocusOut={saveToStore}
        />
      </div>
      </Grid>
      <DeleteButton id={id}/>
      </>
    )
  }
