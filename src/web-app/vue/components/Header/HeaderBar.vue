<!-- NOT BEING USED ATM -->
<template>
    <div class="header-bar flex flex-cross-center flex-sb">
        <p class="header-bar__window-title flex flex-full-center"><small>Marcy</small></p>
        <WindowControls />
    </div>
</template>

<script>
    import WindowControls from '../Header/WindowControls'

    export default {
        name: 'HeaderBar',
        components: {
            WindowControls
        }
    }
</script>
