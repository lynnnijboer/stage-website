<template>
    <div>
        <navMenu />
        <nuxt />
    </div>
</template>

<script>
import navMenu from "~/components/navMenu.vue";

export default {
    components: { navMenu },
    name: 'default',
}
</script>

<style></style>