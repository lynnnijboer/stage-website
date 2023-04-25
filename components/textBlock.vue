
<template>
  <div 
    class="textBlock">
      <h3 
        v-if="title" 
        class="textBlock__title h4"
        >
        {{ title }}
      </h3>
      <p 
        v-if="text" 
        class="textBlock__text"
        >
        {{ text }}
      </p>
      <uiButton 
        class="textBlock__button" 
        :link="link" 
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
    link: {
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
}
</style>
