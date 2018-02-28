var app = new Vue({
  el: "#app",
  data: {
    current: '',
    memory: [],
    subtotal: ''
  },
  methods: {
    press: function(event){
      let key = event.target.innerText;
      app.memory.push(key);
      console.log(event.target.dataset.op);
      switch (key) {
        case "=":
          equals();
          break;
        case "C":
          clear();
          break;
        case "+":
          add();
          break;
        case "=":
          equals();
          break;
        case "c/m":
          clearMem();
          break;
        default:
          app.current += key;
      }
    }
  }
});

function equals() {

}

function clear() {
  app.current = '';
}

function clearMem() {
  app.current = '',
  app.memory = [],
  app.subtotal = '';
}

function add() {
  app.subtotal = Number(app.current);
  app.subtotal.toString();
  console.log(app.current);
  console.log(app.memory);
  clear();
}

function checkLastOp(op) {
  return isNaN(op);
}

window.app = app;
