import {React, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNewSite, saveBlock } from './../../../store/builderSlice'

export default function Blocks () {
  const dispatch = useDispatch()
  const save = () => {dispatch(createNewSite("Newsite"))}
  const [listAvailableBlocks, setListAvailableBlocks] = useState([
    {
      id: null,
      type: 'header',
      name: 'Заголовок'
    },
    {
      id: null,
      type: 'text',
      name: 'Текст'
    },
    {
      id: null,
      type: 'img',
      name: 'Изображение'
    }])

    const addUniqueId = (b) => {
      setListAvailableBlocks(listAvailableBlocks.map(e => {
        e.id = Math.random().toString(36).substring(7)
        return Object.assign({}, e)
      }))
      dispatch(saveBlock(b))
    }

  return (
      <>
      <div className="blocksContainer">
        {listAvailableBlocks.map(b => (
          <div className='blockPreview' key={b.type} onClick={()=> addUniqueId(b)}>
            <p className='block-preview-title'>{b.name}</p>
          </div>
          ))}
      </div>
      {/* //эта кнопка будет в компоненте Start.js там будет висеть акшин создания сайта и получение 
      ввода имени сайта юзера */}
      <button onClick={save}>create site</button>
      </>
  );
}
