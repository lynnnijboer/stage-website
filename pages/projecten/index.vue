
<template>
  <section v-if="currentPage && currentPage.fields"  class="container caseBlockModule">
    <article 
      class="caseBlockModule__text" 
      :class="currentPage.fields.title ? 'transform-small' : ''"
      >
      <h3 
        v-if="currentPage.fields.title" 
        class="caseBlockModule__title h4 text-color-dark"
      >
        {{ currentPage.fields.title }}
      </h3>
       <p>{{ currentPage.fields.intro }}</p>
    </article>
    <div 
      v-if="projects" 
      class="caseBlocks"
      >
        <caseBlock 
          v-for="(project, index) in projects" 
          :icon="project.fields.icon"
          :key="index" 
          :img="project.fields.img.fields.file.url" 
          :title="project.fields.title"
          :text="project.fields.intro"
          :link="`/projecten/${project.fields.slug}`"
        />
    </div>
  </section>
</template>

<script>

export default {
  name: "projecten",
  data() {
    return {
      currentPage: {},
      projects: null
    };
  },
 
  async fetch() {
    //project overview
    const { items } = await this.$contentful.getEntries({
      content_type: "projecten",
      include: 1,
    });
    [this.currentPage] = items;
    //project zelf
    const projectItems = await this.$contentful.getEntries({
      content_type: "project",
      order: 'fields.title',
    });
    this.projects = projectItems.items;
  },
}

</script>


<style lang="scss" scoped>
.caseBlockModule {

  padding: {
    top: rem(100px);
    bottom: rem(100px);
  }

  &__title {
    margin: 0;
  }

  &__text {
    margin-bottom: 40px;
    color: var(text-color-beta);
  }

  .caseBlocks {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;

    @include media-breakpoint-up(md) {
      grid-template-columns: 1fr 1fr;
    }

    @include media-breakpoint-up(lg) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>


