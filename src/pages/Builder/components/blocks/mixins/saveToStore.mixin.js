import { useSelector, useDispatch } from 'react-redux'
import { saveBlockState } from '../store/builderSlice'
import useEffect from 'react'

export default function saveToStore () {
  const dispatch = useDispatch()
  const blocks = useSelector(state => state.builder.current.blocks)

  useEffect(() => {
    const blockDataInStore = blocks.find(e => e.id === id)

    if (blockDataInStore.attributes) {
      // Метод slice() возвращает новый массив, содержащий копию части исходного массива.
      attributes = blockDataInStore.attributes.slice()
    }
  })
}

// С помощью useEffect вы можете объявить "побочный эффект",
// который должен быть запущен после рендера компонента.
//  Когда вы возвращаете callback из useEffect, он будет вызван,
//  когда эффект будет очищен. В текущем случае, когда компонент будет уничтожен.
// Подобно useMemo, useEffect принимает массив зависимостей в качестве второго параметра.

// Без заданных зависимостей, эффект будет запускаться после каждого рендеринга,
// и будет очищаться перед каждым следующим рендерингом.
//  Эта функциональность похожа на комбинацию mounted,

//     =================REACT++++++++++++++++++++++++
// import { useEffect, useRef } from 'react';
// import DateTimePicker from 'awesome-date-time-picker';

// export default function Component() {
//   const dateTimePickerRef = useRef();

//   useEffect(() => {
//     const dateTimePickerInstance = new DateTimePicker(dateTimePickerRef.current);

//     return () => {
//       dateTimePickerInstance.destroy();
//     };
//   }, []);

//   return <input type="text" ref={dateTimePickerRef} />;
// }
//          ================VUE++++++++++++++++++++++

// <template>
//   <input type="text" ref="input" />
// </template>

// <script>
// import DateTimePicker from 'awesome-date-time-picker';

// export default {
//   mounted() {
//    this.dateTimePickerInstance = new DateTimePicker(this.$refs.input);
//   },

//   beforeDestroy() {
//     this.dateTimePickerInstance.destroy();
//   }
// };
// </script>
