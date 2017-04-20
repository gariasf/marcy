<template>
    <div class="column__selector__toolbar__folders flex flex-cross-center flex-sa lb-b">
        <div class="column__selector__toolbar__action-icons flex flex-cross-center flex-sa">
            <!-- Go back in history -->
            <Icon class="column__selector__toolbar__action-icon" iconName='arrow-left-thick' />
            <!-- Go forward in history -->
            <Icon class="column__selector__toolbar__action-icon" iconName='arrow-right-thick' />
            <!-- Go up in the fs -->
            <Icon class="column__selector__toolbar__action-icon" iconName='arrow-up-thick' />
            <!-- Go to OS user home folder -->
            <Icon class="column__selector__toolbar__action-icon" iconName='home-filled' />
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
        }
    }
</script>
