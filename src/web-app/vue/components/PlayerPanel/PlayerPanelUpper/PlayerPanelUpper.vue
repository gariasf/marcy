<template>
    <div class="player-panel__upper">
        <!-- Allows to control the currently playing audio -->
        <AudioControlButtons />
        <Visualizer />
        <!-- Allows to control the volume of the currently playing audio -->
        <VolumeControl />
    </div>
</template>

<script>
    import AudioControlButtons from './AudioControlButtons'
    import VolumeControl       from './VolumeControl'
    import Visualizer          from './Visualizer'

    export default {
        name: 'PlayerPanelUpper',
        components: {
            AudioControlButtons,
            VolumeControl,
            Visualizer
        }
    }
</script>
