import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

const ignoreWarnMessage = 'The .native modifier for v-on is only valid on components but it was used on <div>.';
// eslint-disable-next-line no-unused-vars
Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` is the component hierarchy trace
  if (msg === ignoreWarnMessage) {
    msg = null;
    vm = null;
    trace = null;
  }
}

firebase.initializeApp({
  apiKey: "AIzaSyApWuZhwAqktTX_gH0_FOQvu77a2Kyn2Bs",
  authDomain: "todo-calendar-3cabb.firebaseapp.com",
  databaseURL: "https://todo-calendar-3cabb.firebaseio.com",
  projectId: "todo-calendar-3cabb",
  storageBucket: "todo-calendar-3cabb.appspot.com",
  messagingSenderId: "126495496412",
  appId: "1:126495496412:web:81e795c487d4682bd57c19"
})

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')