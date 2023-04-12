
<template>
    <div class="heroModule">
      <div class="heroModule__wrapper">
        <div class="heroModule__content">
          <div class="heroModule__content--wrapper">
            <h1 class="heroModule__content--title h3">{{ title }}</h1>
            <p class="heroModule__content--text">{{ text }}</p>
            <uiButton :color="buttonColor" :buttonText="buttonText"/>
          </div>
        </div>
        <div class="heroModule__gradient"></div>
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

  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &__content {
    grid-column: 1;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &--text {
      width: 100%;
      max-width: 450px;
      margin-bottom: 40px;
    }
  }

  &__gradient {
    background: linear-gradient(90deg, rgba(142, 31, 40, 1) 0%, rgba(180, 63, 73, 1) 34%, rgba(116, 25, 32, 1) 100%);
    height: 100vh;
    grid-column: 2;
  }
}
</style>
