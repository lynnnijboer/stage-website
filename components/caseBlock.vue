
<template>
  <div class="caseBlock w-100" :style="{ '--bg-img': `url('${img}')` }">
    <div class="caseBlock__content text-color-light">
      <div class="caseBlock__content--text">
        <h5 class="m-0 h6">{{ title }}</h5>
        <p class="m-0">{{ text }}</p>
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
      default: "https://images.pexels.com/photos/3182829/pexels-photo-3182829.jpeg?auto=compress&cs=tinysrgb&w=800",
      required: true
    },
    title: {
      type: String,
      default: "Project",
      required: true
    },
    text: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  }
}
</script>

<style lang="scss" scoped>
.caseBlock {
  cursor: pointer;
  background-image: var(--bg-img);
  background-size: cover;
  height: rem(450px);
  border-top: 10px solid var(--color-alpha);
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-end;
  overflow: hidden;

  &:hover {
    .caseBlock__content--button {
      opacity: 1;
      transform: translateX(0%)
    }
  }

  &__content {
    background: linear-gradient(0deg, rgba(38, 38, 38, 0.8), rgba(38, 38, 38, 0.8));
    grid-row-start: 1;
    grid-column-start: 1;
    display: grid;
    grid-template-columns: auto auto;
    align-items: flex-end;

    &--text {
      padding: 2rem 0 2rem 2rem;
      grid-column-start: 1;
      width: 100%;
      max-width: 300px;
    }

    &--button {
      opacity: 0;
      transform: translateX(40%);
      transition: ease-in-out 0.3s all;
      grid-column-start: 2;
      display: flex;
      justify-content: flex-end;

      .case-button {
        width: rem(70px);
        height: rem(70px);
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
