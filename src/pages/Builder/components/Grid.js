import { useSelector } from 'react-redux'
import { useState } from 'react'
import './Grid.css'

export default function Setka () {
  // const [gridStyle, setGridStyle] = useState({
  //   display: options.grid ? 'block' : 'none',
  //   width: options.width + 'px',
  //   height: options.height + 'px'
  // })
  const options = useSelector(state => state.builder.current.options)
  console.log(options.grid)

  // const calcStyle = () => {{
  //   // display: options.grid ? 'block' : 'none',
  //   width: options.width + 'px',
  //   height: options.height + 'px'
  // }}
  return (
    <div className="grid" style={{display: options ? 'block' : 'none'}}>h</div>
  )
}

// style={{width: `${options.width}px`}}

// Шаблонными литералами называются строковые литералы, 
// допускающие использование выражений внутри