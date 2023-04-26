<template>
    <div>
        <navMenu 
            :buttonText="buttonText" 
            :color="color" 
            :buttonLink="buttonLink" 
            :listItems="listItems"
        />
        <nuxt />
        <footerModule 
            :footerBlocks="footerBlocks"
        />
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
                    title: 'Projecten',
                    text: 'Voor school heb als opdracht gekregen om een website te maken waarin ik met stage verslag laat zien.',
                    buttonText: 'Bekijk projecten',
                    buttonColor: 'beta',
                    buttonLink: '/projecten'
                },
                {
                    title: 'Socials',
                    buttonText: 'Instagram',
                    buttonColor: 'transparant',
                    buttonLink: '/projecten'
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