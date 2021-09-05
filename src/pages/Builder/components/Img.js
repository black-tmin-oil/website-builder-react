// кодировка в base64
import saveToStore from './saveToStore.mixin'
//import DeleteButton from './DeleteButton'
import { useDispatch } from 'react-redux'
import { saveBlockState } from './store/builderSlice'

export default function Img (props) {
    // props: {
    //     id: {
    //       type: String,
    //       required: true
    //     }
    //   },
    const dispatch = useDispatch()
    const [attributes, setAttributes] = useState({
        attributes: [
          {
            fileBase64: null
          }
        ],
        isError: false
      });
    
    async const fileHandler = (input) => {
        const toBase64 = file => new Promise((resolve, reject) => {
            //fileReader это web api
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error)
        })

        const result = await toBase64(input).catch(e => Error(e))

        if (result instanceof Error) {
        //изменяем локальное состояние
        //this.isError = true
        //setAttributes({...attributes, isError: true})
        setAttributes({isError: true})
        } else {
        //this.isError = false
        setAttributes({isError: false})
        setAttributes(attributes[0].fileBase64 = result)
        }

        //this.SAVE_BLOCK_STATE({ id: this.id, attributes: this.attributes })
        dispatch(saveBlockState({id: props.id, attributes: attributes.attributes}))
    };
    return (
      <>
        <div className = "block-container">
            <label for="myfile">Select a file:</label>
            <input type="file" id="myfile" accept="image/*"></input>
            {/* //delete-button(:id="id") */}
        </div>
        <Button id={id} />
      </>
    );
  }


//   methods: {
//     async fileHandler (input) {
//       const toBase64 = file => new Promise((resolve, reject) => {
//         const reader = new FileReader()
//         reader.readAsDataURL(file)
//         reader.onload = () => resolve(reader.result)
//         reader.onerror = error => reject(error)
//       })

//       const result = await toBase64(input).catch(e => Error(e))

//       if (result instanceof Error) {
//         this.isError = true
//       } else {
//         this.isError = false
//         this.attributes[0].fileBase64 = result
//       }

//       this.SAVE_BLOCK_STATE({ id: this.id, attributes: this.attributes })
//     }
//   }
// }
// </script>