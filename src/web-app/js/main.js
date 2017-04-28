'use strict'

/**
* Entire app styles
*/
import "../sass/styles.scss";

/**
* Modules
*/
import Vue       from 'vue'
import VueRouter from 'vue-router'
import Vuex      from 'vuex'

/**
* Vue statements
*/
Vue.use(VueRouter)
Vue.use(Vuex)

/**
* Components
*/
import router from './app-router/routes'

/**
* Mount app
*/
new Vue({router}).$mount('#marcy-mount')
