<template>
    <div class="column__selector__folders">
        <!-- Toolbar to navigate the FS and/or select a path -->
        <FoldersToolbar :currentDir="this.currentDir" :goUp="goUp" :goHome="goHome" :goTo="goTo" />
        <!-- List of files and folders in the current folder -->
        <FoldersListing :dirContent="this.dirContents" :goIn="goIn" />
    </div>
</template>

<script>
    import FoldersToolbar from './FoldersToolbar'
    import FoldersListing from './FoldersListing'

    import SelectorActions from './../../../../../js/app-actions/SelectorActions'

    import fs from 'fs'
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
                if(SelectorActions.lsDir(path.join(this.currentDir + '/../')) == null) {
                    console.log("No permission, man")
                } else {
                    this.currentDir = path.join(this.currentDir + '/../')
                    this.dirContents = SelectorActions.lsDir(this.currentDir)
                }
            },

            goHome: function() {
                this.currentDir = SelectorActions.defaultDir;
                this.dirContents = SelectorActions.lsDir(SelectorActions.defaultDir)
            },

            goIn: function(dir) {
                if(fs.statSync(path.join(this.currentDir, dir)).isDirectory()) {
                    this.currentDir = path.join(this.currentDir, dir)
                    this.dirContents = SelectorActions.lsDir(this.currentDir)
                } else {
                    console.log(dir)
                }
            },

            goTo: function(folderPath) {
                 if(SelectorActions.lsDir(folderPath[0]) == null) {
                    console.log("No permission, man")
                } else {
                    this.currentDir = folderPath[0]
                    this.dirContents = SelectorActions.lsDir(folderPath[0])
                }
            }
        }
    }
</script>
