<template>
    <div class="column__selector__toolbar__folders flex flex-cross-center flex-sa lb-b">
        <div class="column__selector__toolbar__action-icons flex flex-cross-center flex-sa">
            <!-- Go back in history -->
            <i class="column__selector__toolbar__action-icon"><Icon  iconName='arrow-left-thick' /></i>
            <!-- Go forward in history -->
            <i class="column__selector__toolbar__action-icon"><Icon iconName='arrow-right-thick' /></i>
            <!-- Go up in the fs -->
            <i class="column__selector__toolbar__action-icon" v-on:click="changeToUp"><Icon iconName='arrow-up-thick' /></i>
            <!-- Go to OS user home folder -->
            <i class="column__selector__toolbar__action-icon" v-on:click="changeToHome"><Icon iconName='home-filled' /></i>
        </div>
        <!-- For setting a path directly -->
        <div class="column__selector__toolbar__input-wrapper flex flex-full-center">
            <input class="column__selector__toolbar__input" type='text' placeholder='Path'>
        </div>
    </div>
</template>

<script>
    import Icon from './../../../Shared/Icon'

    export default {
        name: 'FoldersToolbar',
        components: {
            Icon
        },
        props: ['goUp', 'goHome'],
        methods: {
            changeToHome: function() {
                this.goHome()
            },
            changeToUp: function() {
                this.goUp()
            }
        }
    }
</script>
