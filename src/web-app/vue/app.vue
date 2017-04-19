<template>
    <div id="marcy-wrap" class="flex flex-dc">
        <!-- Maybe I'll add a custom window bar with controls here -->
        <div class="marcy-layout flex">
            <!-- Contains the song cover and the global navigation menu -->
            <SideBar />
            <div class="marcy-content flex">
                <!-- Different sections from which to select a track to add to the playing queue -->
                <SelectorColumn />
                <div class="marcy-tracks flex flex-dc">
                    <!-- Current playing queue -->
                    <TracksColumn />
                    <!-- Javascript autio element control panel (in UI)-->
                    <PlayerPanel />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SideBar        from './components/Sidebar/Sidebar'
    import PlayerPanel    from './components/PlayerPanel/PlayerPanel'
    import TracksColumn   from './components/Column/TracksColumn/TracksColumn'
    import SelectorColumn from './components/Column/SelectorColumn/SelectorColumn'

    export default {
        name: 'App',
        components: {
            SideBar,
            PlayerPanel,
            TracksColumn,
            SelectorColumn
        }
    }
</script>
