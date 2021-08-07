// //просто мапинг состояния(обьект) из стора
// import { mapState } from 'vuex'

// export default {
//   name: 'Grid',
//   computed: {
//     ...mapState('builder', {
//       options: state => state.current.options
//     }),
//     calcStyle () {
//       return {
//         display: this.options.grid ? 'block' : 'none',
//         width: this.options.width + 'px',
//         height: this.options.height + 'px'
//       }
//     }
//   }