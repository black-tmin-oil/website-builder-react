import saveToStore from './saveToStore.mixin'
import { useDispatch } from 'react-redux'
import { saveBlockState } from '../store/builderSlice'
export default function toggleEdit(props) {
    props.edit = !props.edit
    const dispatch = useDispatch()

    if(props.edit) {
      this.$nextTick(() => {
        const getElement = this.$refs[props.field][0] || this.$refs[props.field]
        getElement.focus()
      })
    } else {
      dispath(saveBlockState({ id: this.id, attributes: this.attributes }))
    }
}

// export default {
//   mixins: [
//     saveToStore
//   ],
//   methods: {
//     toggleEdit (object) {
//       object.edit = !object.edit

//       if (object.edit) {
//         this.$nextTick(() => {
//           const getElement = this.$refs[object.field][0] || this.$refs[object.field]
//           getElement.focus()
//         })
//       } else {
//         this.SAVE_BLOCK_STATE({ id: this.id, attributes: this.attributes })
//       }
//     }
//   }
// }

//миксины посылай нахуй используй HOC компоненты высшего порядка
//toggleEdit отслеживает введение значений юзером + испльзует миксин saveToStore
//toggleEdit пользуют блоки Header/Text
//saveToStore пользует Img
//тоесь нам нужно 2 компонента высшего порядка
//но пока сжелай по тупому без этого


// что такое миксины. В некоторых крупных проектах часто есть несколько компонентов,
//  которым необходимо использовать одну и ту же функцию.
//   Если один и тот же код добавляется к каждому компоненту несколько раз, 
//   ремонтопригодность кода изменится. Очень плохо, оказалось, что миксины решают эту проблему. 
//   Вы можете упаковать общие общие методы в методы миксинов, а затем внедрить каждый компонент 
//   для достижения результата.



// import { mapActions, mapState } from 'vuex'

// export default {
//   computed: {
//     ...mapState('builder', {
//       blocks: state => state.current.blocks
//     })
//   },
//   methods: {
//     ...mapActions('builder', [
//       'SAVE_BLOCK_STATE'
//     ])
//   },
//   mounted () {
//     const blockDataInStore = this.blocks.find(e => e.id === this.id)

//     if (blockDataInStore.attributes) {
//       this.attributes = blockDataInStore.attributes.slice()
//     }
//   }
// }



// import saveToStore from './saveToStore.mixin'

// export default {
//   mixins: [
//     saveToStore
//   ],
//   methods: {
//     toggleEdit (object) {
//       //catch()
//       object.edit = !object.edit

//       if (object.edit) {
//         this.$nextTick(() => {
//           const getElement = this.$refs[object.field][0] || this.$refs[object.field]
//           getElement.focus()
//         })
//       } else {
//         //все что с this это из saveStore миксина
//         this.SAVE_BLOCK_STATE({ id: this.id, attributes: this.attributes })
//       }
//     }
//   }