import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { saveBlockState} from '../../../../store/builderSlice'
import DeleteButton from './DeleteButton'

import Grid from '@material-ui/core/Grid';

import ToggleEdit from './InlineEditor'

export default function Text(props) {
    
    const dispatch = useDispatch()
    const {id} = props
    const [attributes, setAttributes] = useState([{
        field: 'text',
        value: null,
        default: 'start typing here',
    }])

    const blocks = useSelector(state => state.builder.current.blocks)

    useEffect(() => {
        const blockDataInStore = blocks.find(e => e.id === props.id)
        if (blockDataInStore.attributes) {
            setAttributes(prevState => ({
                ...prevState,          
                [0]:              
                blockDataInStore.attributes  
            }));
        }
    }, [])

    const handleInput = (data) => {
        setAttributes(prevState => ({
            ...prevState,          
            [0]: {             
              ...prevState[0],
              value: data.target.value
            }
        }));
    }

    const dispatchToStore = () => dispatch(saveBlockState({id: id, attributes: attributes[0]}))

    return (
        <>
        <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
        >
        <ToggleEdit
          value={attributes[0]} 
          onChange={handleInput}
          onBlur={dispatchToStore}
        />

        </Grid>
        <DeleteButton id={id}/>
        </>
    )
    
}