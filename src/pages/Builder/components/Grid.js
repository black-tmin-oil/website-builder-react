// просто мапинг состояния грида из стора
// еще раз это компонент сам по себе как и компонет blocks их оба связывает drag n dron
import { useSelector } from 'react-redux'

export default function Grid () {
  const options = useSelector(state => state.builder.current.options)

  const calcStyle = () => {
    display: options.grid ? 'block' : 'none'
    width: options.width + 'px'
    height: options.height + 'px'
  }
  return (
    <div>
      this is a grid
    </div>
  )
}
