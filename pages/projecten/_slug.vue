<template>
    <div v-if="currentPage && currentPage.fields" class="container">
       <nuxtLink to="/projecten" class="h5">Back to projects</nuxtLink>
       <h2>{{ currentPage.fields.title }}</h2>
        <div v-if="currentPage.fields.modules" class="modules">
            <modules :modules="currentPage.fields.modules" />
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