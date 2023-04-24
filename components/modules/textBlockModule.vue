
<template>
  <div 
      class="textBlockModule" 
      :class="bgDark === true ? 'bg-color-beta' : 'bg-color-light'"
    >
    <div class="container">
      <div 
        class="textBlockModule__wrapper" 
        :class="[
            textBlocks.length === 1 ? 'grid-1' : '',
            textBlocks.length === 2 ? 'grid-2' : '',
            textBlocks.length >= 3 ? 'grid-3' : ''
          ]"
        >
        <div 
          v-for="(block, index) in textBlocks" 
          :key="index"
          class="textBlockModule__textBlock w-100" 
          :class="[textBlocks.length === 1 ? 'd-flex flex-column align-items-center text-center' : '',
            bgDark === true ? 'text-color-light padding-bg-dark' : 'text-color-dark']"
        >
          <textBlock 
            :title="block.fields.title"
            :text="block.fields.text"
            :buttonText="block.fields.buttonText"
            :buttonColor="block.fields.buttonColor"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "textBlockModule",
  props: {
    textBlocks: {
      type: Array,
    },
    bgDark: {
      type: Boolean,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>
.textBlockModule {
  padding-top: rem(100px);
  padding-bottom: rem(100px);

  .padding-bg-dark {
    padding-top: rem(50px);
    padding-bottom: rem(50px);
  }

  .grid-1 {
    .textBlock {
      max-width: 600px;
    }
  }

  .grid-2 {
    justify-content: space-between;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    gap: 20px;

    @include media-breakpoint-up(md) {
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
  }

  .grid-3 {
    justify-content: space-between;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    gap: 20px;

    @include media-breakpoint-up(md) {
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    @include media-breakpoint-up(lg) {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 40px;
    }
  }
}
</style>
