<template>
    <div class="verslagPagina">
        <div v-if="currentPage && currentPage.fields">
            <div class="verslagPagina__text container">
                <nuxtLink to="/projecten" class="h5 mb-4">Terug naar projecten</nuxtLink>
                <h2>{{ currentPage.fields.title }}</h2>
            </div>
            <div v-if="currentPage.fields.modules" class="modules">
                <modules :modules="currentPage.fields.modules" />
            </div>
        </div>
    </div>
</template>
<script>
import modules from '../../components/modules.vue';

export default {
    data() {
        return {
            currentPage: null,
        };
    },
    components: { modules },
    async fetch() {
        const data = await this.$contentful.getEntries({
            content_type: "project",
            "fields.slug": this.$route.params.slug,
            include: 2,
        });
        if (data.items.length === 0) {
            this.$nuxt.error({ statusCode: 404, message: "Page not found" });
        }
        else {
            [this.currentPage] = data.items;
        }
    },
};

</script>

<style lang="scss">
.verslagPagina {
    padding: {
        top: rem(50px);
        bottom: rem(50px);
    }

    &__text {
        padding: {
            top: rem(40px);
            bottom: rem(40px);
        }
    }
}
</style>