import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { Scroll } from 'vuetify/lib/directives'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#3D3384',
    secondary: '#393E41',
    accent: '#E2C044',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  directives: {
    Scroll
  },
  iconfont: 'mdi'
})
