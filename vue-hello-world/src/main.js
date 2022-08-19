/* import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app') */

console.log(window.Vue);

const vm = new Vue({
  el: '#app',
  data: {
    num: 0
  },
  render(h) {
    return h('div', [this.num, h('button', { on: { click: this.add } }, '+ 1')])
  },
  methods: {
    add() {
      this.num++;
    }
  },
  template: `<div>hi</div>` //完整版不生效
})