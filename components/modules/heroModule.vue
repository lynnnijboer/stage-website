
<template>
    <div class="heroModule">
      <div class="heroModule__wrapper container">
        <div class="heroModule__content">
          <h1 class="heroModule__content--title h3">{{ title }}</h1>
          <p class="heroModule__content--text">{{ text }}</p>
          <uiButton :color="buttonColor" :buttonText="buttonText"/>
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
    buttonColor: {
      type: String,
    },
    buttonText: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.heroModule {
  padding-bottom: rem(50px);
  background: #211e1e;

  &__wrapper {
    height: 100vh;
    align-items: center;
    display: flex;
  }

  &__content {
    color: var(--color-light);

    &--text {
      width: 100%;
      max-width: 450px;
      margin-bottom: 40px;
    }
  }
}
</style>
