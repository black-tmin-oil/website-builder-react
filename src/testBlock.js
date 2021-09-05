export default function testBlock(props) {
    const saveTostore = (e) => console.log(e.target.value)
    return (
        <>
        <h1>{props.name}</h1>
        <textarea onBlur={saveTostore}></textarea>
        {/* //css таким образлм шоб он превратился в значек мусорки на компоненте
        <div className="deleteButton"><Button /></div> */}
        </>
    )
    
}

//нужно: 1)создать HOC high ord comp, которые будут принимать компоненты-блоки и возвращать ...
//ладно пока не важно

//2) сверстать все компоненты
//3) привязка id компонента к id blockPrototype передать сюда return <Component name={b.name} id={b.id}/>;
//4) а для этого нужно создать функцию генерации id в blocks.js
//5) id нужно для того чтобы в store saveBlockState: (state, action) => {
    //   const currentBlock = state.current.blocks.find(e => e.id === action.id)
    //   currentBlock.attributes = action.attributes.slice()
    // }, тут мы по айди находим BlockPrototype и пихаем ему атрибуты из компонента блок(????)

//6) history массив т.е action saveSite() сохраняет в localstorage а также отрисовывается в Start.js
//7) добавить роутеры там легко
//8) юзер зареган  ? сохранить в firebase  : coxp в localstorage
//9) выгрузить на github pages(использовать тот скрипт для роутеров) + travisCI