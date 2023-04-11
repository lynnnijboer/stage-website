<template>
    <div>
        <navMenu :buttonText="buttonText" :color="color" :listItems="listItems"/>
        <nuxt />
    </div>
</template>

<script>
import navMenu from "~/components/navMenu.vue";

export default {
    components: { navMenu },
    name: 'default',
    data() {
        return {
            buttonText: 'button text',
            color: 'alpha',
            listItems: [
                {
                    itemText: 'home',
                    link: 'hallo',
                },
                {
                    itemText: 'my work',
                    link: 'hallo',
                },
                {
                    itemText: 'contact',
                    link: 'hallo',
                },
            ]
        }
    }
}
</script>

<style></style>