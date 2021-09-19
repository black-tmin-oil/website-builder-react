import { useDispatch } from 'react-redux'
import { deleteBlock } from '../../../../store/builderSlice'

import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


import { useStyles } from './../../../../styles'
export default function DeleteButton (props) {
  const classes = useStyles()
  const blockId = props.id
  const dispatch = useDispatch()
  
  const deleteBloc = () => dispatch(deleteBlock(blockId))

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

{ /* <template lang="pug">
.delete-container
  b-tooltip(
    label="Удалить блок"
    size="is-small"
    position="is-left"
  )
    b-button(
      type="is-danger"
      icon-right="delete"
      size="medium"
      @click="DELETE_BLOCK(id)"
      outlined
    )
</template> */ }
{ /* <style lang="sass" scoped>
div.delete-container
  display: none
  position: absolute
  right: 10px
  top: 10px
</style> */ }
