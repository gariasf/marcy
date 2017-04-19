<template>
    <div class="column__selector__folders__listing">
        <!-- Each component below this represents a file or a directory -->
        <FoldersListingItem />
        <FoldersListingItem />
        <FoldersListingItem />
        <FoldersListingItem />
        <FoldersListingItem />
        <FoldersListingItem />
        <FoldersListingItem />
        <FoldersListingItem />
        <FoldersListingItem />
        <FoldersListingItem />
        <FoldersListingItem />
    </div>
</template>

<script>
    import FoldersListingItem from './FoldersListingItem'

    export default {
        name: 'FoldersListing',
        components: {
            FoldersListingItem
        }
    }
</script>
