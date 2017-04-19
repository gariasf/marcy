<template>
    <div class="column column__selector">
        <!-- Siferent sections of the selector column -->
        <Folders />
    </div>
</template>

<script>
    import Folders from './Folders/Folders'

    export default {
        name: 'SelectorColumn',
        components: {
            Folders
        }
    }
</script>
