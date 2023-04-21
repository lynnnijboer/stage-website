
<template>
  <div class="container">
    <div class="imageTextBlock">
      <div 
        v-if="title && text" 
        class="imageTextBlock__textBlock col-12 col-md-6"
      >
        <div class="imageTextBlock__textBlock--text text-color-dark">
          <textBlock
            :title="title"
            :text="text"
            :img="img"
            :buttonText="buttonText"
            :buttonColor="buttonColor"
          />
        </div>
      </div>
      <div 
        class="imageTextBlock__imageBlock p-0"
        :class="title && text ? 'col-md-6' : ''" 
        :style="{ '--bg-img': `url('${img}')` }"
      >
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
  },
}
</script>

<style lang="scss" scoped>
.imageTextBlock {
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: {
    top: rem(100px);
    bottom: rem(100px);
  }

  @include media-breakpoint-up(md) {
    flex-direction: row;
  }

  &__textBlock {
    height: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin-bottom: 20px;

    .text {
      width: 100%;
      max-width: 600px;
    }

    @include media-breakpoint-up(md) {
      margin-bottom: 0;
      padding: 0 2rem 0 0;
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
