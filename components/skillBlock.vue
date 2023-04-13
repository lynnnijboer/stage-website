
<template>
  <div class="skillBlock w-100">
    <div class="skillBlock__content text-color-dark">
      <h5 class="m-0 h6">{{ title }}</h5>
      <p class="m-0">{{ text }}</p>
    </div>
    <div 
      class="skillBlock__image" 
      :style="{ '--bg-img': `url('${img}')` }"
    >
    </div>
  </div>
</template>

<script>

export default {
  name: 'skillBlock',
  props: {
    title: {
      type: String,
      default: "Project",
      required: true
    },
    text: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    img: {
      type: String,
      default: "https://images.pexels.com/photos/3715605/pexels-photo-3715605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  }
}
</script>

<style lang="scss" scoped>
.skillBlock {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px;
  cursor: pointer;
  border-radius: 2rem;
  background-color: var(--color-light);
  display: grid;
  grid-template-columns: 2fr 1fr;
  overflow: hidden;

  &__content {
    padding: 3rem;
  }

  &__image {
    background-image: var(--bg-img);
    background-size: cover;
  }
}
</style>
