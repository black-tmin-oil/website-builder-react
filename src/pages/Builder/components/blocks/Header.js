import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { saveBlockState} from '../../../../store/builderSlice'
import DeleteButton from './DeleteButton'

import ToggleEdit from './InlineEditor'

import Grid from '@material-ui/core/Grid';

export default function Header (props) {
  const [attributes, setAttributes] = useState([
    {
      field: 'title',
      value: null,
      default: 'Title',
      edit: false
    },
    {
      field: 'subtitle',
      value: null,
      default: 'Subtitle',
    }
  ])
  const dispatch = useDispatch()
  const {id} = props


  const blocks = useSelector(state => state.builder.current.blocks)

    useEffect(() => {
        const blockDataInStore = blocks.find(e => e.id === props.id)
        
        if (blockDataInStore.attributes) {
          setAttributes([...attributes].map((object, index) => {
            if(object.field === blockDataInStore.attributes[index].field) {
              return {
                ...object,
                value: blockDataInStore.attributes[index].value
              }
            }
          }))
        }
    }, [])

  const handleInput = (e, a) => {
    setAttributes([...attributes].map(object => {
      if(object.field === a.field) {
        return {
          ...object,
          value: e.target.value
        }
      }
      else return object;
    }))
    dispatch(saveBlockState({id: id, attributes: attributes}))

  }

  const dispatchToStore = () => dispatch(saveBlockState({id: id, attributes: attributes}))

    return (
      <>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {attributes.map((attribute) => (
        <ToggleEdit
          value={attribute}
          onChange={(e) => handleInput(e, attribute)}
          onBlur={dispatchToStore}
        />
      ))}
      </Grid>
      <DeleteButton id={id}/>
      </>
    )
  }