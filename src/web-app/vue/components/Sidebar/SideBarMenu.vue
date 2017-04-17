<template>
    <div class="sidebar__menu">
        <ul class="sidebar__menu__items">
            <SideBarMenuItem text='Library' is-active='true' />
            <SideBarMenuItem text='Folders' />
            <SideBarMenuItem text='Playlists' />
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
