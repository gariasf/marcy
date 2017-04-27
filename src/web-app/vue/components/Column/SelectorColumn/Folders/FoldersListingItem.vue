<template>
    <div v-on:dblclick="handleClick" :title="this.text">{{text}}</div>
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
