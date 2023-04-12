
<template>
  <div class="textBlockModule" :class="bgDark === true ? 'bg-color-dark' : 'bg-color-light'">
    <div class="container">
      <div class="textBlockModule__wrapper" :class="textBlocks.length === 1 ? '' : 'grid'">
        <div 
        v-for="(block, index) in textBlocks" 
        :key="index" 
        class="textBlockModule__textBlock w-100" 
        :class="[textBlocks.length === 1 ? 'd-flex flex-column align-items-center text-center' : '',
        bgDark === true ? 'text-color-light' : 'text-color-dark']
        ">
              <h3 class="title h4">{{ block.title }}</h3>
              <p class="text" v-if="block.text">{{ block.text }}</p>
              <uiButton class="textBlockModule__button" v-if="block.buttonText && block.buttonColor" :buttonText="block.buttonText" :color="block.buttonColor"/>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import uiButton from '../uiButton.vue';

export default {
  name: "textBlockModule",
  components: { uiButton },
  props: {
    textBlocks: {
      type: Array,
      required: true
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
  padding-top: rem(50px);
  padding-bottom: rem(50px);

  .title {
    height: auto;

    @include media-breakpoint-up(md) {
      height: 47px
    }
  }

  .grid {
    justify-content: space-between;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    gap: 20px;

    @include media-breakpoint-up(md) {
      grid-template-columns: auto auto;
      gap: 40px;
    }

    @include media-breakpoint-up(lg) {
      grid-template-columns: auto auto auto
    }
  }

  &__button {
    margin-top: 20px;
  }

  &__textBlock {
    .text {
      width: 100%;
      max-width: 600px;
    }
  }
}
</style>
