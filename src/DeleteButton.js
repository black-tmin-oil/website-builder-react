import { useDispatch } from 'react-redux'
import { deleteBlock } from './store/builderSlice'

export default function DeleteButton (props) {
  const blockId = props.id
  const dispatch = useDispatch()
  
  const deleteBloc = () => dispatch(deleteBlock(blockId))

  return (
    <div>
      <button onClick={deleteBloc}>delete block</button>
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
