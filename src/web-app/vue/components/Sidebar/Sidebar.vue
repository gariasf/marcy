<template>
    <div class="flex flex-dc">
        <SideBarHeader />
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
