import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { saveBlockState} from '../../../../store/builderSlice'
import DeleteButton from './DeleteButton'

import Grid from '@material-ui/core/Grid';



export default function Text(props) {
    
    const dispatch = useDispatch()
    const {id} = props
    const [editing, setEditing] = useState(false)
    const [attributes, setAttributes] = useState([{
        field: 'text',
        value: null,
        default: 'Start typing here',
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

    const saveonChange = (data) => {
        setAttributes(prevState => ({
            ...prevState,          
            [0]: {             
              ...prevState[0],
              value: data.target.value
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
            <p>
                {!editing ? 
                <span 
                onClick={() => setEditing(true)}
                >
                 {attributes[0].value || attributes[0].default}
                </span> : 
                
                <textarea 
                onChange={(e) => saveonChange(e)} 
                onBlur={() => setEditing(false)}>

                </textarea>
                }
                
            </p>
           
        </div>
        </Grid>
        <DeleteButton id={id}/>
        </>
    )
    
}