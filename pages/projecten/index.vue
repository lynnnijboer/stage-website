<template>
  <section v-if="currentPage">
    <h2>{{ currentPage.fields.title }}</h2>
    <p>{{ currentPage.fields.intro }}</p>
    <article v-if="projects" class="projects">
      <nuxtLink 
        :style="{ '--bg-img': `url('${img}')` }"
        v-for="(project, index) in projects" 
        :key="index" 
        :to="`/projecten/${project.fields.slug}`"
        class="projectBlock col-4"
        >
      </nuxtLink>
    </article>
  </section>
</template>

<script>


export default {
  name: "projecten",
  data() {
    return {
      currentPage: {},
      projects: {}
    };
  },
  props: {
    img: {
      type: String,
      default: "https://images.pexels.com/photos/3182829/pexels-photo-3182829.jpeg?auto=compress&cs=tinysrgb&w=800",
      required: true
    },
  },
  async fetch() {
    const { items } = await this.$contentful.getEntries({
      content_type: "projecten",
      include: 1,
    });
    [this.currentPage] = items;
    const projectItems = await this.$contentful.getEntries({
      content_type: "project",
      include: 1,
    });
    this.projects = projectItems.items;
  },
}

</script>

<style lang="scss">
.projectBlock {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px;
  border-radius: 2rem;
  cursor: pointer;
  background-image: var(--bg-img);
  background-size: cover;
  height: rem(450px);
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-end;
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
  }
}
</style>

