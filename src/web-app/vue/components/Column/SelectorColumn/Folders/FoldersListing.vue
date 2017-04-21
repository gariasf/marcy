<template>
    <div class="column__selector__folders__listing">
        <!-- Each component below this represents a file or a directory -->
        <FoldersListingItem v-for="(item, key) in dirContent" :key="key" :text="item" :goIn="goIn"/>
    </div>
</template>

<script>
    import FoldersListingItem from './FoldersListingItem'

    export default {
        name: 'FoldersListing',
        components: {
            FoldersListingItem
        },
        props: ['dirContent', 'goIn']
    }
</script>
