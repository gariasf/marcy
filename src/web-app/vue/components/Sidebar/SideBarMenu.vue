<template>
    <div class="sidebar__menu lb-r">
        <ul class="sidebar__menu__items">
            <SideBarMenuItem text='Library'   icon="library" />
            <SideBarMenuItem text='Folders'   icon="folders-multiple" is-active='true' />
            <SideBarMenuItem text='Playlists' icon="playlist"/>
            <hr class="separator" />
            <SideBarMenuItem text='Settings'    icon="config" />
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
