
<template>
    <div class="heroModule">
      <div class="heroModule__wrapper">
        <div class="heroModule__content">
          <h1 class="heroModule__content--title h3">{{ title }}</h1>
          <p class="heroModule__content--text">{{ text }}</p>
          <uiButton color="alpha"/>
        </div>
      </div>
  </div>
</template>

<script>
import uiButton from '../uiButton.vue';

export default {
  name: "heroModule",
  components: { uiButton },
  props: {
    title: {
      type: String,
      default: "Title from website"
    },
    text: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  },
}
</script>

<style lang="scss" scoped>
.heroModule {
  padding-top: rem(50px);
  padding-bottom: rem(50px);

  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    .heroModule__content {
      grid-row: 1 / 3;
      grid-column: 1;

      &--text {
        width: 100%;
        max-width: 450px;
        margin-bottom: 40px;
      }
    }
  }
}
</style>
