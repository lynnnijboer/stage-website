
<template>
  <div class="caseBlock w-100" :style="{ '--bg-img': `url('${img}')` }">
    <div class="caseBlock__content text-color-light">
      <div class="caseBlock__content--text">
        <h5 class="m-0">hallo</h5>
        <p class="m-0">hallo dit is tekst</p>
      </div>
      <div class="caseBlock__content--button">
        <div class="case-button">
          <icons icon="arrow-right"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icons from './icons.vue';

export default {
  name: 'caseBlock',
  components: { icons },
  props: {
    img: {
      type: String,
      default: "https://images.pexels.com/photos/3182829/pexels-photo-3182829.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
  }
}
</script>

<style lang="scss" scoped>
.caseBlock {
  background-image: var(--bg-img);
  background-size: cover;
  height: rem(450px);
  border-top: 10px solid var(--color-alpha);
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-end;

  &__content {
    background: linear-gradient(0deg, rgba(38, 38, 38, 0.8), rgba(38, 38, 38, 0.8));
    grid-row-start: 1;
    grid-column-start: 1;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: flex-end;

    &--text {
      padding: 2rem;
      grid-column-start: 1;
    }

    &--button {
      grid-column-start: 2;
      display: flex;
      justify-content: flex-end;

      .case-button {
        width: rem(80px);
        height: rem(80px);
        border-radius: rem(30px) 0 0 0;
        background-color: var(--color-alpha);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
