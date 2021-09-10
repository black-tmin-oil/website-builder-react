import { useState, useRef, useEffect } from "react"
import { useDispatch } from 'react-redux'
import { saveBlockState} from './store/builderSlice'

export default function Text(props) {
    const dispatch = useDispatch()
    const {name, id} = props
    const [attributes, setAttributes] = useState([{
        field: 'text',
        value: '',
        default: 'Введите сюда свой текст',
        edit: false
    }])

    const toggleEdit = (e) => {
        setAttributes(prevState => ({
            ...prevState,           // copy all other field/objects
            [0]: {              // recreate the object that contains the field to update
              ...prevState[0], // copy all the fields of the object
              value: e.target.value    // overwrite the value of the field to update
            }
        }));
        //dispatch(saveBlockState({id: id, attributes: attributes[0]}))
        
    }
    // const toggleEdit = (object) => {
    //     object.edit = !object.edit
    //     if (object.edit) {
    //         const getElement = object.field[0] || object.field
    //         getElement.onFocus()
    //     } else {
    //         dispatch(saveBlockState({id: id, attributes: attributes}))
    //     }
    // }
    const textareaRef = useRef(null)

    // const toggleEdit = (object) => {
    //     //object.edit = !object.edit
    //     if (object.edit) {
    //         useEffect(() => {
    //             textareaRef.current.focus()
    //         })
    //         //textareaRef.current.focus()
    //         //getElement.focus()
    //         //ref.focus()
    //     } else {
    //         dispatch(saveBlockState({id: id, attributes: attributes}))
    //     }
    // }
    // useEffect(()=>{

    //     // print the ref to the console
    //     console.log(textareaRef)        

    // })
    const save = () => dispatch(saveBlockState({id: id, attributes: attributes[0]}))
    

    return (
        <div className='block-container'>
            {/* <p>{!attributes[0].edit ? (
                <span 
                   onClick={toggleEdit(attributes[0])}
                >
                {attributes[0].value || attributes[0].default}
                </span>
                ) : (
                  <textarea ref={textareaRef} onBlur={toggleEdit(attributes[0])}></textarea>
                )}
            </p> */}
            <p onClick={save}>dispath to store</p>
        <p>{attributes[0].value}</p>
            <p><textarea ref={textareaRef} onBlur={toggleEdit}></textarea></p>
        <h1>{props.name}</h1>
        {/* //css таким образлм шоб он превратился в значек мусорки на компоненте
        <div className="deleteButton"><Button /></div> */}
        </div>
    )
    
}

// const toggleEdit = (object) => {
//     object.edit = !object.edit
//     if (object.edit) {
//         useEffect(() => {
//             const getElement = textareaRef
//             getElement.focus()
//         }, [])
//     } else {
//         dispatch(saveBlockState({id: id, attributes: attributes}))
//     }
// }

//2) сверстать все компоненты
//3) привязка id компонента к id blockPrototype передать сюда return <Component name={b.name} id={b.id}/>;
//4) а для этого нужно создать функцию генерации id в blocks.js
//5) id нужно для того чтобы в store saveBlockState: (state, action) => {
    //   const currentBlock = state.current.blocks.find(e => e.id === action.id)
    //   currentBlock.attributes = action.attributes.slice()
    // }, id нужно для удаления блока пихаем в deleteButton компонент где тригерится акшин
    //тут мы по айди находим BlockPrototype и пихаем ему атрибуты из компонента блок(да так)

//6) history массив т.е action saveSite() сохраняет в localstorage а также отрисовывается в Start.js
//7) добавить роутеры там легко
//8) юзер зареган  ? сохранить в firebase  : coxp в localstorage
//9) выгрузить на github pages(использовать тот скрипт для роутеров) + travisCI

// import ToggleEdit from './ToggleEdit'
// import SaveToStore from './SaveToStore'

// const Text = () => {
//   };
  
// export default ToggleEdit(Text); //exporting <Text />



// const ToggleEdit = (WrappedComponent) => {
// return (props) => (
//     <WrappedComponent {...props} />
//     );
// };

// export default ToggleEdit;

// //-------------------------------
// import React, { useState, useEffect } from "react";

// function useToggleEdit(attributes) {

//   return {};
// }

// export default useToggleEdit;

// export default someAsync(dataConfig)(WrappedComponent)

