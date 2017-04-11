'use strict'

// Entire app styles
import "../sass/styles.scss";

import Vue       from 'vue'
import VueRouter from 'vue-router'

// Views
import App from '../vue/App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
    { 
        path: '/', 
        component: App 
    }
  ]
})

new Vue({router}).$mount('#marcy-mount')
