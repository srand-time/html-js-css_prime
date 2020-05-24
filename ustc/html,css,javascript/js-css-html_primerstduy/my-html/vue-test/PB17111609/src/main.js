// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  data: function () {
    return {
      flag: 0,
      hour_1: 0,
      hour_2: 0,
      minute_1: 0,
      minute_2: 0,
      second_1: 0,
      second_2: 0,
      lefttime: 0,
      inputhour: 0,
      inputminute: 0,
      inputsecond: 0,
      lefthour: 0,
      leftminute: 0,
      leftsecond: 0,
      // inputhour就是输入的时间,lefthour剩余时间
      seti: null,
      message: '00:00:00',
      message2: ''
    }
  },
  template: '<App/>'
})
