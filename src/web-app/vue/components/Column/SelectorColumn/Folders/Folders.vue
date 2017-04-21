<template>
    <div class="column__selector__folders">
        <!-- Toolbar to navigate the FS and/or select a path -->
        <FoldersToolbar :currentDir="this.currentDir" :goUp="goUp" :goHome="goHome" />
        <!-- List of files and folders in the current folder -->
        <FoldersListing :dirContent="this.dirContents" :goIn="goIn" />
    </div>
</template>

<script>
    import FoldersToolbar from './FoldersToolbar'
    import FoldersListing from './FoldersListing'

    import SelectorActions from './../../../../../js/app-actions/SelectorActions'

    import path from 'path'

    export default {
        name: 'Folders',
        components: {
            FoldersToolbar,
            FoldersListing
        },
        data: function() {
            return {
                dirContents: SelectorActions.lsDir(SelectorActions.defaultDir),
                currentDir: SelectorActions.defaultDir
            }
        },
        methods: {
            goUp: function() {
                this.currentDir = path.join(this.currentDir + '/../')
                this.dirContents = SelectorActions.lsDir(this.currentDir)
            },
            goHome: function() {
                this.dirContents = SelectorActions.lsDir(SelectorActions.defaultDir)
                this.currentDir = SelectorActions.defaultDir;
            },
            goIn: function(dir) {
                this.currentDir = path.join(this.currentDir, dir)
                this.dirContents = SelectorActions.lsDir(this.currentDir)
            }
        }
    }
</script>
