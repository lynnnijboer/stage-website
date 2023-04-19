<template>
    <div>
        <navMenu :buttonText="buttonText" :color="color" :listItems="listItems"/>
        <nuxt />
        <footerModule />
    </div>
</template>

<script>
import navMenu from "~/components/navMenu.vue";
import footerModule from "~/components/footerModule.vue";

export default {
    components: { navMenu, footerModule },
    name: 'default',
    data() {
        return {
            buttonText: 'button text',
            color: 'alpha',
            listItems: [
                {
                    itemText: 'home',
                    link: '/',
                },
                {
                    itemText: 'my work',
                    link: '/my-work',
                },
                {
                    itemText: 'contact',
                    link: '/contact',
                },
            ],
            footerBlocks: [
                {
                    title: 'hallo',
                    text: 'hallo',
                },
                {
                    title: 'hallo',
                    text: 'hallo',
                },
                {
                    title: 'hallo',
                    text: 'hallo',
                }
            ],
        }
    }
}
</script>

<style></style>