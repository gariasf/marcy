/*
* App assets
*/
import GlobalActions from './../app-actions/GlobalActions'

/*
* Modules
*/
import VueRouter from 'vue-router'

/*
* Views
*/
import App from '../../vue/App.vue'

const init = {

    app: () => {
        GlobalActions.init()
    }
};

/*
* Routes
*/
const router = new VueRouter({
    mode: 'hash',
    routes: [
    { 
        path: '/', 
        component: App,
        beforeEnter: init.app()
    }
  ]
})

export default router
