<template>
    <div class="player-panel__lower__flow-control flex flex-cross-center flex-sa lb-r">
        <i><Icon class="player-panel__lower__control__icon" iconName='repeat' /></i>
        <i><Icon class="player-panel__lower__control__icon" iconName='shufle' /></i>
    </div>
</template>

<script>
    import Icon from './../../Shared/Icon'

    export default {
        name: 'FlowButtons',
        components: {
            Icon
        }
    }
</script>
