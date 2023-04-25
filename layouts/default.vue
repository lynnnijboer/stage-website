<template>
    <div>
        <navMenu 
            :buttonText="buttonText" 
            :color="color" 
            :buttonLink="buttonLink" 
            :listItems="listItems"/>
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
            buttonText: 'Contact',
            buttonLink: '/',
            color: 'beta',
            listItems: [
                {
                    itemText: 'Home',
                    link: '/',
                },
                {
                    itemText: 'Projecten',
                    link: '/projecten',
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