
<template>
  <div class="skillBlock w-100">
    <div class="skillBlock__content text-color-light">
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
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  }
}
</script>

<style lang="scss" scoped>
.skillBlock {
  cursor: pointer;
  background-color: var(--color-alpha);
  height: rem(300px);
  padding: 2rem;
}
</style>
