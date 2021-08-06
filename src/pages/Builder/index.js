import Blocks from './components/Blocks'
import Grid from './components/Grid'
import headerBlock from './components/blocks/Header'
import imgBlock from './components/blocks/Img'
import textBlock from './components/blocks/Text'

//тупо рендерн всех компонентов и блоков
export default function Builder() {
    return (
        <>
         <Blocks />
         <Grid />
         ...
        </>
    )
}