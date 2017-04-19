<template>
    <div class="column__tracks__table__header">
        <!-- Track row columns, put this way for data representation and managment convenience -->
        <TracksTableAtribute attrName="#" />
        <TracksTableAtribute attrName="Title" />
        <TracksTableAtribute attrName="Artist" />
        <TracksTableAtribute attrName="Album" />
        <TracksTableAtribute attrName="Duration" />
        <TracksTableAtribute attrName="Source" />
    </div>
</template>

<script>
    import TracksTableAtribute from './TracksTableAtribute'

    export default {
        name: 'TracksTableAtributes',
        components: {
            TracksTableAtribute
        }
    }
</script>
