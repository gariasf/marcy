<template>
    <div class="player-panel">
        <!-- Audio and volume controls -->
        <PlayerPanelUpper />
        <!-- Queue and timeline controls -->
        <PlayerPanelLower />
    </div>
</template>

<script>
    import PlayerPanelUpper from './PlayerPanelUpper/PlayerPanelUpper'
    import PlayerPanelLower from './PlayerPanelLower/PlayerPanelLower'
    
    export default {
        name: 'PlayerPanel',
        components: {
            PlayerPanelUpper,
            PlayerPanelLower
        }
    }
</script>
