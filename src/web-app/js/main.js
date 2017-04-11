'use strict'

// Entire app styles
import "../sass/styles.scss";

import Vue       from 'vue'
import VueRouter from 'vue-router'

// Views
import app from '../vue/app.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
    { 
        path: '/', 
        component: app 
    }
  ]
})

new Vue({router}).$mount('#marcy-mount')
