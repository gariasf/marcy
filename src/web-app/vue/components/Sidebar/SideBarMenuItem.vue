<template>
     <li :class="['sidebar__menu__items-item', 'pointer', {'is-active': isActive == 'true'} ]"><i><Icon :iconName='icon' /></i>&nbsp;{{text}}</li>
</template>

<script>
    import Icon from './../Shared/Icon'

    export default {
        name: 'SideBarMenuItem',
        props: ["text", "isActive", "icon"],
        components: {
            Icon
        }
    }
</script>
