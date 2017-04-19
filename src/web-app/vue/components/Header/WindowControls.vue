<!-- NOT BEING USED ATM -->
<template>
        <div class="header-bar__window-controls flex flex-full-center">
            <button title='Configuration'>
                <Icon class="header-bar__window-controls-icon flex" iconName="config" />
            </button>
            <button class="header-bar__window-control flex flex-full-center" v-on:click="minimizeWindow" title='Minimize'>
                <Icon class="header-bar__window-controls-icon flex" iconName="minimize" />
            </button>
            <button class="header-bar__window-control flex flex-full-center" v-on:click="maximizeWindow" title='Maximize'>
                <Icon class="header-bar__window-controls-icon flex" iconName="maximize" />
            </button>
            <button class="header-bar__window-control flex flex-full-center" v-on:click="closeWindow" title='Close'>
                <Icon class="header-bar__window-controls-icon flex" iconName="close" />
            </button>
        </div>
</template>

<script>
    import Icon from '../Shared/Icon';
    import GlobalActions from './../../../js/app-actions/GlobalActions';

    export default {
        name: 'WindowControls',
        components: {
            Icon
        },
        methods: {
            closeWindow: () => {
                GlobalActions.close()
            },
            minimizeWindow: () => {
                GlobalActions.minimize()
            },
            maximizeWindow: () => {
                GlobalActions.maximize()
            }
        }
        
    }
</script>
