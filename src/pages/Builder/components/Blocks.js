// перетаскиваемый блок содержащий все блоки img/buttn/text
// мапит из стора состояние и акшины здесь импорт mapDispathtoProps mapStatetoProps
// также нужна библиотека dragble
// состоя ния редакс можно и нужно мешать с локальным состоянием компонента
// в локальном стейте хранить всяко мелкое дерьмо компонента
// Небольшой state лучше хранить в компоненте, а не диспатчить стор.
import {useState} from 'react'

export default function Blocks() {
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
    // каждому блоку добавить уник айди
    const addUniqueId = () => {
        // addUniqueId () {
        //     this.listAvailableBlocks = this.listAvailableBlocks.map(e => {
        //       e.id = Math.random().toString(36).substring(7)
        //       return Object.assign({}, e)
        //     })
        //   }
        setListAvailableBlocks({listAvailableBlocks: this.listAvailableBlocks.map(e => {
            setListAvailableBlocks({
              id: Math.random()
                .toString(36)
                .substring(7)
            })
            return Object.assign({}, e)
          })
        })
    }
    
    return({})
}
 
  
