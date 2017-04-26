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
import Settings from './../../vue/components/Settings/Settings'

import Library from './../../vue/components/Column/SelectorColumn/Library/Library'
import Folders from './../../vue/components/Column/SelectorColumn/Folders/Folders'
import Playlists from './../../vue/components/Column/SelectorColumn/Playlists/Playlists'

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
        path: '/settings', 
        component: Settings,
    },
    { 
        path: '/', 
        component: App,
        beforeEnter: init.app(),
        children: [
            {
                path: '',
                component: Folders,
            },
            {
                path: '/selector/library', 
                component: Library,
            },
            {
                path: '/selector/folders', 
                component: Folders,
            },
            {
                path: '/selector/playlists', 
                component: Playlists,
            }
        ]
    }
  ]
})

export default router
