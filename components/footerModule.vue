
<template>
    <footer class="footerModule">
      <div class="footerModule__wrapper">
      <textBlock
        v-for="(block, index) in footerBlocks"
        :key="index" 
        :title="block.title"
        :text="block.text"
        :buttonText="block.buttonText"
        :link="block.buttonLink"
        :buttonColor="v=block.buttonColor"
      />
      </div>
   </footer> 
</template>

<script>


export default {
  name: "footerModule",
  props: {
    footerBlocks: {
      type: Array
    },
  },
}
</script>

<style lang="scss" scoped>
.footerModule {
  padding-inline: 1rem;
  padding-block: rem(50px);
  background-color: var(--color-alpha);
  color: var(--color-light);

  &__wrapper{
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr;

   @include media-breakpoint-up(md) {
    grid-template-columns: 1fr 1fr;
  }

  @include media-breakpoint-up(lg) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  }

 
}
</style>
