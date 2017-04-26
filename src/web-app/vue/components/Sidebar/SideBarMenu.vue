<template>
    <div class="sidebar__menu lb-r">
        <ul class="sidebar__menu__items">
            <router-link to="/selector/library"><SideBarMenuItem text='Library' icon="library" :is-active="($route.path == '/selector/library') ? 'true' : 'false'" /></router-link>
            <router-link to="/selector/folders"><SideBarMenuItem text='Folders' icon="folders-multiple" :is-active="($route.path == '/selector/folders') ? 'true' : 'false'" /></router-link>
            <router-link to="/selector/playlists"><SideBarMenuItem text='Playlists' icon="playlist" :is-active="($route.path == '/selector/playlists') ? 'true' : 'false' " /></router-link>
            <hr class="separator" />
            <router-link to="/settings"><SideBarMenuItem text='Settings' icon="config" /></router-link>
            <SideBarMenuItem text='About Marcy' icon="info" />
        </ul>
    </div>
</template>

<script>
    import SideBarMenuItem from './SideBarMenuItem'

    export default {
        name: 'SideBarMenu',
        components: {
            SideBarMenuItem
        }
    }
</script>
