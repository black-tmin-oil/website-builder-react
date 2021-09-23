import { useDispatch } from 'react-redux'
import { deleteBlock } from '../../../../store/builderSlice'

import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

export default function DeleteButton (props) {
  const blockId = props.id
  const dispatch = useDispatch()
  
  // const deleteBlock = () => dispatch(deleteBlock(blockId))

  return (
    <div>
      <Tooltip title="Delete" placement="left">
        <IconButton aria-label="delete">
          <DeleteIcon onClick={() => dispatch(deleteBlock(blockId))}/>
        </IconButton>
      </Tooltip>
    </div>
  )
}