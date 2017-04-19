<template>
    <div class="column__tracks__table">
        <!-- Table header titles, puts name to each column -->
        <TracksTableCellTitles />
        <!-- The components below this represent a track each -->
        <TracksTableRow />
        <TracksTableRow />
        <TracksTableRow />
        <TracksTableRow />
        <TracksTableRow />
    </div>
</template>

<script>
    import TracksTableCellTitles from './TracksTableCellTitles'
    import TracksTableRow from './TracksTableRow'

    export default {
        name: 'TracksTable',
        components: {
            TracksTableCellTitles,
            TracksTableRow
        }
    }
</script>
