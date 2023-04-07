
<template>
  <button class="ui-button">{{ buttonText }}</button>
</template>

<script>

export default {
  name: 'uiButton',
  props: {
    buttonText: {
      type: String,
      default: "View all projects"
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-button {
  background-color: var(--color-alpha);
}
</style>
