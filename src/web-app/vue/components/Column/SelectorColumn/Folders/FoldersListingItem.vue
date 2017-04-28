<template>
    <div tabindex="0" v-on:dblclick="handleClick" :title="this.text" class="flex flex-cross-center"><i class="icon--file-list-item"><Icon :iconName="this.elementIcon" /></i>&nbsp;<span>{{text}}</span></div>
</template>

<script>
    import Icon from './../../../Shared/Icon'

    import SelectorActions from './../../../../../js/app-actions/SelectorActions'

    export default {
        name: 'FoldersListingItem',
        props: ['text', 'goIn', 'context'],
        components: {
            Icon
        },
        data: function() {
            return {
               elementIcon: this.getElementIcon()
            }
        },
        methods: {
            handleClick: function() {
                this.goIn(this.text);
            },
            getElementIcon: function() {
                if(SelectorActions.isDirectoryExt(this.text, this.context)) {
                    return 'folder'
                } else if(SelectorActions.isValidFile(this.text)) {
                    return 'audio-file'
                }
                
            }
        }
    }
</script>
