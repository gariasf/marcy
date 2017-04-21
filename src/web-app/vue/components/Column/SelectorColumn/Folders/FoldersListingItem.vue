<template>
    <div v-on:click="handleClick">{{text}}</div>
</template>

<script>
    export default {
        name: 'FoldersListingItem',
        props: ['text', 'goIn'],
        methods: {
            handleClick: function() {
                this.goIn(this.text);
            }
        }
    }
</script>
