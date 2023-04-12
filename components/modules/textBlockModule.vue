
<template>
    <div class="textBlockModule">
      <div class="textBlockModule__wrapper">
        <div v-for="(block, index) in textBlocks" :key="index" class="textBlockModule__textBlock w-100" :class="textBlocks.length === 1 ? 'col-12 d-flex align-items-center flex-column text-center' : 'col'">
              <h3 class="h4" v-if="block.title">{{ block.title }}</h3>
              <p class="text" v-if="block.text">{{ block.text }}</p>
              <uiButton class="textBlockModule__button" v-if="block.buttonText && block.buttonColor" :buttonText="block.buttonText" :color="block.buttonColor"/>
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
    }
  },
}
</script>

<style lang="scss" scoped>
.textBlockModule {
  padding-top: rem(50px);
  padding-bottom: rem(50px);

  &__wrapper {
    justify-content: space-between;
    flex-wrap: wrap;
    display: flex;
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
