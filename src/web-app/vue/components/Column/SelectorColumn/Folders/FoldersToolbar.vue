<template>
    <div class="column__selector__toolbar__folders flex flex-cross-center flex-sa lb-b ">
        <div class="column__selector__toolbar__action-icons flex flex-cross-center flex-sa">
            <!-- Go back in history -->
            <i class="icon--action-icon" title="To be implemented"><Icon iconName='arrow-left-thick' /></i>
            <!-- Go forward in history -->
            <i class="icon--action-icon" title="To be implemented"><Icon iconName='arrow-right-thick' /></i>
            <!-- Go up in the fs -->
            <i class="icon--action-icon" v-on:click="changeToUp" title="Go up"><Icon iconName='arrow-up-thick' /></i>
            <!-- Go to OS user home folder -->
            <i class="icon--action-icon" v-on:click="changeToHome" title="User directory"><Icon iconName='home-filled' /></i>
        </div>
        <!-- For setting a path directly -->
        <div class="column__selector__toolbar__input-wrapper flex flex-full-center lb-l">
            <input class="column__selector__toolbar__input" type='text' :value='currentDir' disabled>
            <i class="icon--action-icon" v-on:click="openFolderSelector" title="Select a directory"><Icon iconName='folder-open' /></i>
        </div>
    </div>
</template>

<script>
    import Icon from './../../../Shared/Icon'

    const dialog = electron.remote.dialog;

    export default {
        name: 'FoldersToolbar',
        components: {
            Icon
        },
        props: ['currentDir', 'goUp', 'goHome', 'goTo'],
        methods: {
            changeToHome: function() {
                this.goHome()
            },

            changeToUp: function() {
                this.goUp()
            },
            
            openFolderSelector: function() {
                dialog.showOpenDialog({
                    properties: ['openDirectory'],
                    }, (result) => {
                        if(result) {
                           this.goTo(result)
                        }
                    });
            }
        }
    }
</script>
