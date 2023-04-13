
<template>
  <div class="marquee">
    <div class="marquee__group">
      <h5 
        v-for="(word, index) in textSlider" 
        :key="index" 
        class="marquee__group--word" 
      >
      {{ word.word }}
      </h5>
    </div>
  </div>
</template>

<script>

export default {
  name: 'textSlider',
  props: {
    word: {
      type: String,
    },
    textSlider: {
      type: Array,
    }
  }
}
</script>

<style lang="scss" scoped>
.marquee {
  padding: {
    top: rem(50px);
    bottom: rem(50px);
  }

  display: flex;
  overflow: hidden;
  user-select: none;
  gap: 2rem;

  &__group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    min-width: 100%;
    animation: scroll 40s linear infinite reverse;

    &--word {
      text-transform: uppercase;
      font-size: 8rem;

      @include media-breakpoint-up(md) {
        font-size: 10rem;
      }
    }
  }
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-100% - 2rem));
  }
}
</style>
