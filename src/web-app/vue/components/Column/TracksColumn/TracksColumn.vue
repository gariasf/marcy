<template>
    <div class="column column__tracks">
        <!-- For managing playlists and the playing queue, also for searching songs in the playing queue -->
        <TracksToolbar />
        <!-- List of tracks in the playing queue -->
        <TracksTable />
    </div>
</template>

<script>
    import TracksToolbar from './TracksToolbar'
    import TracksTable from './TracksTable'

    export default {
        name: 'TracksColumn',
        components: {
            TracksToolbar,
            TracksTable
        }
    }
</script>
