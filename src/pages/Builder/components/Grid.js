//просто мапинг состояния(обьект) из стора
import { useSelector } from 'react-redux'

export default function Grid() {
  const options = useSelector(state => state.builder.current.options)
  
  const calcStyle = () => {
    display: options.grid ? 'block' : 'none',
    width: options.width + 'px',
    height: options.height + 'px'
  }
}