
<template>
    <div class="heroModule">
      <div class="heroModule__wrapper container">
        <div class="heroModule__content">
          <h1 class="heroModule__content--title h3">{{ title }}</h1>
          <p class="heroModule__content--text">{{ text }}</p>
          <div class="heroModule__content--buttons">
            <uiButton 
              :color="buttonColor" 
              :buttonText="buttonText"
            />
            <uiButton 
              :color="secondButtonColor" 
              :buttonText="secondButtonText"
            />
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "heroModule",
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
    secondButtonColor: {
      type: String,
    },
    buttonText: {
      type: String,
    },
    secondButtonText: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.heroModule {
  padding-bottom: rem(50px);
  background-color: var(--color-beta);

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

    &--buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;

      @include media-breakpoint-up(sm) {
        flex-direction: row;
        align-items: flex-end;
      }
    }
  }
}
</style>
