//import DeleteButton from './DeleteButton'
// import toggleEdit from './toggleEdit.mixin'
// import {useState} from 'react'
// import EasyEdit from 'react-easy-edit';
// import { useSelector, useDispatch } from 'react-redux'
// //import { saveBlockState} from '../store/builderSlice'
// // ЗАДАЧА
// // с помощью хуков и локал состояния добавить редактирование
// // а потом из локального состояния диспатчить в стор
// export default function Text () {
//   //const [textAreaValue, setTextAreaValue] = useState()
//   const select = useSelector(state => state.builder.current.blocks)
//   const dispatch = useDispatch()
//   //const save = (value) => {setTextAreaValue(value)}
//   const save = (value) => {dispatch(saveBlockState(value))}

//   return (
//     <>
//     <EasyEdit
//       type="text"
//       onSave={save}
//       saveButtonLabel="Save Me"
//       attributes={{ name: "awesome-input", id: 1}}
//     />
//     <p>here printed: {select}</p>
//     </>
//   );
// }
// export default function Text () {
//   // const [attributes, setAttributes] = useState({
//   //   field: 'text',
//   //   value: null,
//   //   default: 'Введите сюда свой текст',
//   //   edit: false
//   // })
//   //const [textAreaValue, setTextAreaValue] = useState();
//   // const handleChange = (e) => {
//   //   setTextAreaValue(textAreaValue => e.target.value);
//   // }
//   return (
//     <>
//       <div className='block-container'>
//         <p>
//           {/* <span>просто текст тот что печатаю (value) или по default</span> */}
//           <textarea>
//             {/* value={textAreaValue} */}
//             onChange= {e => setTextAreaValue(e.target.value)}
//             {/* onChange={handleChange} */}
//           </textarea>
//         </p>

//       </div>
//       {/* <DeleteButton id={id} /> */}
//     </>
//   )
// }

/// <style lang="sass" scoped>
// div.block-container
//   padding: 20px
//   p span
//     cursor: text
// </style>

// <template lang="pug">
// верстаем див с классом .block-container, <textarea> обычный тег html на котором висит обработка ввода
// .block-container
//   p
//     span(
//       v-show="!attributes[0].edit"
//       @click="toggleEdit(attributes[0])"
//       v-html="attributes[0].value || attributes[0].default"
//     )
//     textarea(
//       :ref="attributes[0].field"
//       v-model="attributes[0].value"
//       @blur="toggleEdit(attributes[0])"
//       v-show="attributes[0].edit"
//     )

//   delete-button(:id="id")
// </template>

// блок принимает айди в качесте пропса от компонента Blocks
// также здесь есть локальное состояние с атрибутами блока которые
// нужны для процесса редактирования блока
