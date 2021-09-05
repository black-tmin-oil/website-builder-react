// мапит акшин DELETE_BLOCK
// кнопка принимает айди блока как пропс ищет по айди блок
import react from 'react'
import { useDispatch } from 'react-redux'
import { deleteBlock } from '../../../store/builderSlice'

export default function DeleteButton (props) {
  const dispatch = useDispatch()
  //const blockId = props.id
  return (
    <div>
      <button onClick={() => dispatch(deleteBlock(props))} name/>
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
