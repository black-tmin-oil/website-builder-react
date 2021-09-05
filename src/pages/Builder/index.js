import Blocks from './components/Blocks'
import Grid from './components/Grid'
import headerBlock from './components/blocks/Header'
import imgBlock from './components/blocks/Img'
import textBlock from './components/blocks/Text'
import React, { Component } from 'react'
import { useSelector } from 'react-redux'

// тупо рендерн всех компонентов и блоков и состояния здесь диспатч не нужен
export default function Builder () {
  const blocks = useSelector(state => state.builder.current.blocks)
  const options = useSelector(state => state.builder.current.options)
  return (
      <>
          <Blocks />
          <Grid />
          ...
        </>
  )
}
// это должно быть в компоненте Blocks т.е все блоки рендерятся на Blocks
// dnd provider это в файле индекс он оборачивает Blocks и Grid
const { phones } = this.props
<div class='right floated five wide column'>
  <DndProvider backend={HTML5Backend}>
      <div class='ui row'>
          <h3 class='brand-heading'>Blocks</h3>
        </div>
      <div class='ui row'>
          <div className='shopping-list'>
              {Object.keys(phones).map((phone) => (
                  <Phone key={phone} brand={phones[phone].brand} />
                ))}
            </div>
          <Grid />
        </div>
    </DndProvider>
</div>
