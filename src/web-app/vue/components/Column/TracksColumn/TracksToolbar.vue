<template>
    <div class="column__selector__toolbar__folders flex flex-cross-center flex-sa lb-b">
        <div class="column__selector__toolbar__action-icons flex flex-cross-center flex-sa">
            <!-- Create a new playlist (will create a new playing queue) -->
            <i class="icon--action-icon"><Icon iconName='add-playlist' /></i>
            <!-- Import an already created playlist -->
            <i class="icon--action-icon"><Icon iconName='import' /></i>
            <!-- Save the current playing queue -->
            <i class="icon--action-icon"><Icon iconName='save' /></i>
            <!-- Undo action (like adding songs) -->
            <i class="icon--action-icon"><Icon iconName='undo' /></i>
            <!-- Redo action -->
            <i class="icon--action-icon"><Icon iconName='redo' /></i>
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
