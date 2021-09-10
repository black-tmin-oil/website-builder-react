import {React, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNewSite, saveBlock } from './store/builderSlice'
import './Blocks.css'

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



// const dispatch = useDispatch()
// const dispatchToStore = () => {dispatch(saveBlock(b))}

// const getImg = (name) => require(`@/assets/blocks-preview/${name}.svg`)

// // getImg (name) {
// //   return require(`@/assets/blocks-preview/${name}.svg`)
// // },
// <div className="blocksContainer" style={{background:'blue'}}>
//         {listAvailableBlocks.map(b => (
//           <div className='blockPreview' key={b.type} onClick={dispatchToStore}>
//             <p className='block-preview-title'>{b.name}</p>
//             <img src={getImg(b.type)} alt={b.type}></img>
//           </div>
//   </div>

//конечно ут ебя ошибка потому что action saveblokstate используется только в миксинах
  //которые пользуют блоки у которых этот самый attributes уже имеется поэтому 
  //диспатч не используй в Blocks
//главный момент что именно onClick отправляется в стор прототип компонента(блока)
  //в index висит слушатель на блоках в сторе и как только в стор по клику
  //запихивается прототип. отрисовывается настоящий компонент на index: for block in blocks{
                                                          //   key={block.id}            
                                                            //                           },
                                    
  //потом этот самый компонент можно легко редактировать исходя из логики самого компонента

  //ЗСАДАЧА по клику запихивать прототип нужного блока в стор(Blocks.js) + добавить функцию рандомного id
  //слушать стор. рендерить компоненты(index.js)
  //фактически это вся логика приложения