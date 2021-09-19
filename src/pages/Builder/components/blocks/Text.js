import { useState, useRef, useEffect } from "react"
import { useDispatch } from 'react-redux'
import { saveBlockState} from '../../../../store/builderSlice'
import DeleteButton from './DeleteButton'
import EditableLabel from 'react-inline-editing';

import Grid from '@material-ui/core/Grid';
export default function Text(props) {
    
    const dispatch = useDispatch()
    const {id} = props
    const [attributes, setAttributes] = useState([{
        field: 'text',
        value: '',
        default: 'Введите сюда свой текст',
    }])

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
            <EditableLabel text='Text'
                labelFontWeight='bold'
                // labelFontSize="20px"
                inputMaxLength="200"
                onFocusOut={saveToStore}
            />
        </div>
        </Grid>
        <DeleteButton id={id}/>
        </>
    )
    
}