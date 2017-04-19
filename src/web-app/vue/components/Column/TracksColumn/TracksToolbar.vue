<template>
    <div class="column__selector__toolbar__folders flex flex-cross-center flex-sa">
        <div class="column__selector__toolbar__action-icons flex flex-cross-center flex-sa">
            <!-- Create a new playlist (will create a new playing queue) -->
            <Icon class="column__selector__toolbar__action-icon" iconName='add-playlist' />
            <!-- Import an already created playlist -->
            <Icon class="column__selector__toolbar__action-icon" iconName='import' />
            <!-- Save the current playing queue -->
            <Icon class="column__selector__toolbar__action-icon" iconName='save' />
            <!-- Undo action (like adding songs) -->
            <Icon class="column__selector__toolbar__action-icon" iconName='undo' />
            <!-- Redo action -->
            <Icon class="column__selector__toolbar__action-icon" iconName='redo' />
        </div>
        <!-- For searching songs in the playing queue -->
        <div class="column__selector__toolbar__input-wrapper flex flex-full-center">
            <input class="column__selector__toolbar__input" type='text' placeholder='Search...'>
        </div>
    </div>
</template>

<script>
    import Icon from './../../Shared/Icon'

    export default {
        name: 'TracksToolbar',
        components: {
            Icon
        }
    }
</script>
