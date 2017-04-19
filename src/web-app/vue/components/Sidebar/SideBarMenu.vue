<template>
    <div class="sidebar__menu">
        <ul class="sidebar__menu__items">
            <SideBarMenuItem text='Library' />
            <SideBarMenuItem text='Folders' is-active='true' />
            <SideBarMenuItem text='Playlists' />
            <hr class="separator" />
            <SideBarMenuItem text='Settings' />
            <SideBarMenuItem text='About Marcy' />
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
