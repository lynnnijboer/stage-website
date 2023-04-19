<template>
  <section v-if="currentPage.fields">
    <!-- <pre>{{ currentPage.fields.buttonColor }}</pre> -->
    <modulesHeroModule 
      :title="currentPage.fields.title" :text="currentPage.fields.intro" 
      :buttonColor="currentPage.fields.buttonColor" 
      :secondButtonColor="currentPage.fields.secondButtonColor" 
      :buttonText="currentPage.fields.button" 
      :secondButtonText="currentPage.fields.secondButton"
    />
    <div class="modules">
      <modules :modules="currentPage.fields.modules"/>
    </div>
  </section>
</template>

<script>

export default {
  name: 'IndexPage',
  async fetch() {
    const { items } = await this.$contentful.getEntries({
      content_type: 'homepage',
      include: 4,
    });

    [this.currentPage] = items;
  },
  data() {
    return {
      currentPage: {},
    }
  }
}

</script>
