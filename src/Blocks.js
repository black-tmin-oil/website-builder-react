import {React, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNewSite, saveBlock } from './store/builderSlice'

function BlockProto(props) {
  const dispatch = useDispatch()
  const toStore = () => {dispatch(saveBlock(props))}
  const o = () => console.log('hey:', props)
  return(
    <>
    <button onClick={toStore} key={props.type}>{props.name}</button>
    </>
  )

}
export default function Blocks () {
  const dispatch = useDispatch()
  const toStore = (listAvailableBlocks) => {dispatch(saveBlock(listAvailableBlocks))}
  const save = () => {dispatch(createNewSite("Newsite"))}
  const [listAvailableBlocks, setListAvailableBlocks] = useState([
    {
      id: 1,
      type: 'header',
      name: 'Заголовок'
    },
    {
      id: 2,
      type: 'text',
      name: 'Текст'
    },
    {
      id: 3,
      type: 'img',
      name: 'Изображение'
    }])
  
  return (
      <>
      <div className="blocksContainer" style={{background:'blue'}}>
        {listAvailableBlocks.map(b => (
            <BlockProto
              id = {b.id}
              type = {b.type}
              name = {b.name}
            />
          ))}
      </div>
      {/* //эта кнопка будет в компоненте Start.js там будет висеть акшин создания сайта и получение 
      ввода имени сайта юзера */}
      <button onClick={save}>create site</button>
      </>
  );
}

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