<template>
    <div class="column__tracks__table__header">
        <!-- Track row columns, put this way for data representation and managment convenience -->
        <TracksTableCellTitle attrName="#" />
        <TracksTableCellTitle attrName="Title" />
        <TracksTableCellTitle attrName="Artist" />
        <TracksTableCellTitle attrName="Album" />
        <TracksTableCellTitle attrName="Duration" />
    </div>
</template>

<script>
    import TracksTableCellTitle from './TracksTableCellTitle'

    export default {
        name: 'TracksTableAtributes',
        components: {
            TracksTableCellTitle
        }
    }
</script>
