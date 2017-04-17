<template>
    <li :class="['sidebar__menu__items-item', 'pointer', {'is-active': isActive == 'true'} ]">{{text}}</li>
</template>

<script>

    export default {
        name: 'SideBarMenuItem',
        props: ["text", "isActive"]
    }
</script>
