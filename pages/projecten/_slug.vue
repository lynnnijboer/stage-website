<template>
    <div class="container">
       <nuxtLink to="/projecten" class="h5">Back to projects</nuxtLink>
       <h2>{{ currentPage.fields.title }}</h2>
       <div class="modules">
            <modules :modules="currentPage.fields.modules"/>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            currentPage: null,
        };
    },
    async fetch() {
        const data = await this.$contentful.getEntries({
            content_type: "project",
            "fields.slug": this.$route.params.slug,
            include: 1,
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