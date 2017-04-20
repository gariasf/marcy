<template>
    <div class="player-panel__lower lb-t">
        <!-- Shows the total duration and ammount of songs in the current playing queue -->
        <p class="player-panel__lower__playlist-count flex flex-cross-center lb-r">5 tracks - [00:00]</p>
        <!-- Allows to control the way the queue plays -->
        <QueueFlowButtons />
        <!-- Self explanatory -->
        <AudioProgressBar />
    </div>
</template>

<script>
    import QueueFlowButtons from './QueueFlowButtons'
    import AudioProgressBar from './AudioProgressBar'

    export default {
        name: 'PlayerPanelLower',
        components: {
            QueueFlowButtons,
            AudioProgressBar
        }
    }
</script>
