
<template>
  <footer class="footerModule">
      <textBlock v-for="(block, index) in footerBlocks " 
        :title="block.title"
        :text="block.text"
      />
  </footer> 
</template>

<script>
import textBlock from './textBlock.vue';


export default {
  name: "footerModule",
  props: {
    footerBlocks: {
      type: Array
    },
  },
  components: { textBlock }
}
</script>

<style lang="scss" scoped>
.footerModule {
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: 1fr;

  @include media-breakpoint-up(md) {
    grid-template-columns: 1fr 1fr;
  }

  @include media-breakpoint-up(lg) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
