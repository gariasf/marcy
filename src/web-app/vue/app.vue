<template>
    <div id="marcy-wrap" class="flex flex-dc">
        <HeaderBar />
        <div class="marcy-layout flex">
            <SideBar />
            <div class="marcy-content flex">
                <SelectorColumn />
                <div class="marcy-tracks flex flex-dc">
                    <TracksColumn />
                    <PlayerPanel />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SideBar        from './components/Sidebar/Sidebar'
    import HeaderBar      from './components/Header/HeaderBar'
    import PlayerPanel    from './components/PlayerPanel/PlayerPanel'
    import TracksColumn   from './components/Column/TracksColumn'
    import SelectorColumn from './components/Column/SelectorColumn'

    export default {
        name: 'App',
        components: {
            SideBar,
            HeaderBar,
            PlayerPanel,
            TracksColumn,
            SelectorColumn
        }
    }
</script>
