import { useState, useRef, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { saveBlockState} from '../../../../store/builderSlice'


export default function Editor(props) {
    
    const dispatch = useDispatch()

    const {id, attributes} = props

    const [edit, setEdit] = useState(false)




    const blocks = useSelector(state => state.builder.current.blocks)
    useEffect(() => {
        const blockDataInStore = blocks.find(e => e.id === props.id)
        if (blockDataInStore.attributes) {
        setAttributes(prevState => ({
            ...prevState,          
            [0]:              
              blockDataInStore.attributes  // overwrite the value of the field to update
            
        }));
        
        console.log('blockDataInStore.attributes from redux to state', blockDataInStore.attributes)
        console.log("inital state before render BlockDataInStore", attributes)
        }
    }, [])


    


    const saveToStore = (object) => {
        setAttributes(prevState => ({
            ...prevState,           // copy all other field/objects
            [0]: {              // recreate the object that contains the field to update
              ...prevState[0], 
              
            // edit: !prevState[0].edit 
            edit: !object.edit
            }
        }));
            dispatch(saveBlockState({id: id, attributes: attributes[0]}))
        
    }

    const saveonChange = (data) => {
        setAttributes(prevState => ({
            ...prevState,           // copy all other field/objects
            [0]: {              // recreate the object that contains
              ...prevState[0],
            //   edit: !prevState[0].edit,
              value: data.target.value   // overwrite the value of the field to update
            }
        }));
    }

    return (
        <div>
            <p>
                {!edit ? 
                <span 
                onClick={() => setEdit(true)}
                >
                 {children}
                </span> : 
                
                <textarea 
                    onChange={(e) => saveonChange(e)} 
                    onBlur={() => setEdit(false)}>
                </textarea>
                }
                
            </p>
           
        </div>
    )
    
}