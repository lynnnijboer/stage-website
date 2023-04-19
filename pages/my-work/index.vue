<template>
  <section v-if="currentPage.fields">
    <div class="modules">
      <modules :modules="currentPage.fields.modules"/>
    </div>
  </section>
</template>

<script>

export default {
  name: 'my-work',
  async fetch() {
    const { items } = await this.$contentful.getEntries({
      content_type: 'my-work',
      include: 3,
    });

    [this.currentPage] = items;
  },
  data() {
    return {
      currentPage: {},
    }
  }
}
