
<template>
  <div class="skillBlock w-100">
    <div class="skillBlock__content text-color-dark">
      <h5 class="m-0 h6">{{ title }}</h5>
      <p class="m-0">{{ text }}</p>
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
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      required: true
    },

  }
}
</script>

<style lang="scss" scoped>
.skillBlock {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px;
  cursor: pointer;
  border-radius: 2rem;
  background-color: var(--color-light);
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  &__content {
    padding: 3rem;
  }
}
</style>
