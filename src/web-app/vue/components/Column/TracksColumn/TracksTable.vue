<template>
    <div class="column__tracks__table">
        <!-- Table header titles, puts name to each column -->
        <TracksTableAtributes />
        <!-- The components below this represent a track each -->
        <TracksTableItem />
        <TracksTableItem />
        <TracksTableItem />
        <TracksTableItem />
        <TracksTableItem />
    </div>
</template>

<script>
    import TracksTableAtributes from './TracksTableAtributes'
    import TracksTableItem from './TracksTableItem'

    export default {
        name: 'TracksTable',
        components: {
            TracksTableAtributes,
            TracksTableItem
        }
    }
</script>
