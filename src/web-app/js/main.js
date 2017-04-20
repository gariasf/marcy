'use strict'

/*
* Entire app styles
*/
import "../sass/styles.scss";

/*
* Modules
*/
import Vue       from 'vue'
import VueRouter from 'vue-router'

/*
* Vue statements
*/
Vue.use(VueRouter)

/*
* Components
*/
import router from './app-router/routes'

/*
* Mount app
*/
new Vue({router}).$mount('#marcy-mount')
