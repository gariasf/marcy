<template>
    <i>
         <svg viewBox="0 0 24 24"><use :href="'/media/img/icons.svg#' + iconName"></use></svg>
    </i>
</template>

<script>
    export default {
        name: 'Icon',
        props: ['iconName']
    }
</script>
