import { useDispatch } from 'react-redux'
import { saveBlockState } from '../../../../store/builderSlice'
import {useState} from 'react'
import DeleteButton from './DeleteButton'

export default function Img (props) {
    const dispatch = useDispatch()
    const [attributes, setAttributes] = useState({
      fileBase64: null,
      isError: false
    });


    async function fileHandler(input) {
        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file.target.files[0])
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error)
        })

        const result = await toBase64(input).catch(e => Error(e))

        if (result instanceof Error) {
          setAttributes(attributes.isError = true)

        } else {
          setAttributes(attributes.fileBase64 = result)
        }
        dispatch(saveBlockState({id: props.id, attributes: attributes}))
    };

    return (
      <>
        <div className = "block-container">
            <input type="file" onChange={fileHandler}></input>
            {!attributes.isError ? <img src={attributes}/> : <p>При обработке изображения возникла ошибка</p>}
            <DeleteButton id={props.id}/>
        </div>
      </>
    );
  }

//   const [state, setState] = useState({ name: "Michael" })
// const isFirstRender = useRef(true)
// useEffect(() => {
//   if (isFirstRender.current) {
//     isFirstRender.current = false // toggle flag after first render/mounting
//     return;
//   }
//   console.log(state) // do something after state has updated
// }, [state])


