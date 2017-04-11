/*
* Modules
*/
import VueRouter from 'vue-router'

/*
* Views
*/
import App from '../../vue/App.vue'

/*
* Routes
*/
const router = new VueRouter({
    mode: 'hash',
    routes: [
    { 
        path: '/', 
        component: App 
    }
  ]
})

export default router
