<template>
    <div class="sidebar flex flex-dc">
        <!-- Contains the cover and data about the song and it's author -->
        <SideBarHeader />
        <!-- Main app navigation, allows to choose the diferent selection sections and to open the settings -->
        <SideBarMenu />
    </div>
</template>

<script>
    import SideBarHeader from './SideBarHeader'
    import SideBarMenu from './SideBarMenu'

    export default {
        name: 'SideBar',
        components: {
            SideBarHeader,
            SideBarMenu
        }
    }
</script>
