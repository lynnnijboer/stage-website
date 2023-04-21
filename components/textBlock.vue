
<template>
  <div class="textBlock">
    <h3 class="textBlock__title h4">{{ title }}</h3>
      <p  class="textBlock__text">{{ text }}</p>
      <uiButton 
        class="textBlock__button" 
        v-if="buttonText && buttonColor" 
        :buttonText="buttonText" 
        :color="buttonColor"
      />
  </div>
</template>

<script>

export default {
  name: 'textBlock',
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
    buttonText: {
      type: String
    },
    buttonColor: {
      type: String
    },
  }
}
</script>

<style lang="scss" scoped>
.textBlock {

  &__title {
    height: auto;
  }

  &__button {
    margin-top: 20px;
  }

  &__text {
    width: 100%;
    max-width: 600px;
  }
}
</style>
