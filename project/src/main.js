import Vue from 'vue'
import router from './router'
import app from './app'
import VueScroller from 'vue-scroller'

import { Swipe, SwipeItem } from 'mint-ui'
import { Popup } from 'mint-ui';

import 'mint-ui/lib/style.css'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Popup.name, Popup);
Vue.use(router)
Vue.use(VueScroller)
new Vue({
  el: '#app',
  router,
  render: h => h(app)
})
