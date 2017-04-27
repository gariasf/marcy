<template>
    <div class="player-panel__upper__audio-control flex flex-full-center flex-sa">
        <i><Icon class="lb-r" iconName='clear-playlist' /></i>
        <i><Icon iconName='skip-previous' /></i>
        <i><Icon iconName='play' /></i>
        <i><Icon iconName='skip-next' /></i>
    </div>
</template>

<script>
    import Icon from './../../Shared/Icon'

    export default {
        name: 'AudioControlButtons',
        components: {
            Icon
        }
    }
</script>
