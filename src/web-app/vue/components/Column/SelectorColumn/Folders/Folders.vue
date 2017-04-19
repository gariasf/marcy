<template>
    <div class="column__selector__folders">
        <!-- Toolbar to navigate the FS and/or select a path -->
        <FoldersToolbar /> 
        <!-- List of files and folders in the current folder -->
        <FoldersListing />
    </div>
</template>

<script>
    import FoldersToolbar from './FoldersToolbar'
    import FoldersListing from './FoldersListing'

    export default {
        name: 'Folders',
        components: {
            FoldersToolbar,
            FoldersListing
        }
    }
</script>
