<template>
    <div class="player-panel__upper__audio-control flex flex-full-center flex-sa">
        <Icon class="lb-r" iconName='clear-playlist' />
        <Icon iconName='skip-previous' />
        <Icon iconName='play' />
        <Icon iconName='skip-next' />
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
