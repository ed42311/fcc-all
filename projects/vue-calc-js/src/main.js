import Vue from 'vue';
import App from './app.vue'

new Vue({
  el: 'body',
  components: { App }
})

// var app = new Vue({
//   el: "#app",
//   data: {
//     current: '',
//     subtotal: ''
//   },
//   methods: {
//     press: function(event){
//       let key = event.target.innerText;
//       switch (key) {
//         case "=":
//           equals();
//           break;
//         case "C":
//           clear();
//           break;
//         case "+":
//           add();
//           break;
//         case "=":
//           equals();
//           clearMem();
//           break;
//         case "c/m":
//           clearMem();
//           break;
//         default:
//           app.current += key;
//       }
//     }
//   }
// });
//
// const equals = () => {
//
// }
//
// const clear = () => {
//   app.current = '';
// }
//
// const add = () => {
//   clear();
// }
//
// window.app = app;
