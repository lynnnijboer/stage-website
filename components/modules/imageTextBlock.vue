
<template>
  <div class="container">
    <div class="imageTextBlock">
      <div class="imageTextBlock__textBlock col-12 col-md-6 p-0">
        <div class="imageTextBlock__textBlock--text">
          <h3 v-if="title" class="title h4">{{ title }}</h3>
          <div class="textBlocks" v-for="(block, index) in textBlocks" :key="index">
            <p v-if="block.text" class="p">{{ block.text }}</p>
          </div>
        </div>
        <uiButton class="imageTextBlock__button" 
          v-if="buttonText && buttonColor" 
          :buttonText="buttonText" 
          :color="buttonColor"/>
      </div>
      <div class="imageTextBlock__imageBlock p-0"
        :class="title && text ? 'col-md-6' : ''" 
        :style="{ '--bg-img': `url('${img}')` }">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "imageTextBlock",
  props: {
    buttonColor: {
      type: String
    },
    buttonText: {
      type: String
    },
    title: {
      type: String
    },
    text: {
      type: String,
    },
    img: {
      type: String,
      required: true
    },
    textBlocks: {
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped>
.imageTextBlock {
  overflow: hidden;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: column;

  padding: {
    top: rem(100px);
    bottom: rem(50px);
  }

  @include media-breakpoint-up(md) {
    flex-direction: row;
    gap: 40px;
  }

  &__textBlock {
    height: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      width: 100%;
      max-width: 600px;
    }
  }

  &__imageBlock {
    width: 100%;
    height: 350px;
    background-image: var(--bg-img);
    background-size: cover;
  }
}
</style>
